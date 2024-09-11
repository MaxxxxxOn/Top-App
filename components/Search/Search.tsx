import {SearchProps} from "./Search.props";
import styles from './Search.module.css';
import {JSXElement} from "@babel/types";
import {JSX, useState} from "react";
import {className} from "postcss-selector-parser";
import cn from "classnames";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import GlassIcom from "./glass.svg";
import {useRouter} from "next/router";
import {KeyboardEventHandler} from "react";
export const Search=({className, ...props}: SearchProps): JSX.Element =>{
    const [search, setSearch] = useState<string>('');
    const router = useRouter();
    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };
    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key == 'Enter') {
            goToSearch();
        }
    }
    return (
        <form className={cn(className, styles.search)} {...props} role={"search"}>
            <Input
                className={styles.input}
                placeholder='Поиск...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button appearance={"primary"}
            className={styles.button}
                    onClick={goToSearch}
                    aria-label={"Искать по сайту"}
            >
                <GlassIcom/>
            </Button>
        </form>
    )

};