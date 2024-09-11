import {InputProps} from "./Input.props";
import styles from './Input.module.css';
import {JSXElement} from "@babel/types";
import {forwardRef, ForwardedRef, JSX} from "react";
import {className} from "postcss-selector-parser";
import cn from "classnames";



// eslint-disable-next-line react/display-name
export const Input = forwardRef(({error, className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
        <input className={cn(styles.input, {
            [styles.error]: error
        })} ref={ref} {...props}/>
            {error && <span role={"alert"} className={styles.errorMessage}>{error.message}</span> }
        </div>
    );
});