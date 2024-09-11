import {DividerProps} from "./Divider.props";
import styles from './Divider.module.css';
import {JSXElement} from "@babel/types";
import {JSX} from "react";
import {className} from "postcss-selector-parser";
import cn from "classnames";

export const Divider=({ className, ...props}: DividerProps): JSX.Element =>{
    return (
        <hr className={cn (className, styles.hr)} {...props}/>
    )

};