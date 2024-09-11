import styles from './Up.module.css';
import {JSX, useEffect} from "react";
import UpIcon from "./up.svg"
import ArrowIcon from "/components/Button/arrow.svg"
import {useSkrollY} from "../../hooks/useSkrollY";
import {useAnimation} from "framer-motion";
import {motion} from "framer-motion";
import {ButtonIcon} from "../ButtonIcon/ButtonIcon";

export const Up=(): JSX.Element =>{

    const controls = useAnimation();
    const y = useSkrollY();

    useEffect(() =>{
        controls.start({ opacity: y/ document.body.scrollHeight});

    }, [y,controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <motion.div
            className={styles.up}

            animate={controls}
            initial={{opacity: 0}}
        >
        {/*<UpIcon/>*/}
            <ButtonIcon appearance={"primary"} icon={"up"} aria-label={"Наверх"} onClick={scrollToTop}/>
        </motion.div>

    )

};