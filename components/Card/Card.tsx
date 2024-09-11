import {CardProps} from "./Card.props";
import styles from './Card.module.css';
import {JSXElement} from "@babel/types";
import {ForwardedRef, forwardRef, JSX} from "react";
import {className} from "postcss-selector-parser";
import cn from "classnames";

// eslint-disable-next-line react/display-name
export const Card=  forwardRef (({color = 'white', children, className, ...props}: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element =>{
    return (
        <div className={cn(styles.card, className,{[styles.blue]: color == 'blue'})}
             ref={ref}
            {...props}>
            {children}
        </div>
    )

});