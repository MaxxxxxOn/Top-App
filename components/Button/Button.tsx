import {JSX, useEffect} from "react";
import {ButtonProps} from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArowIcon from '../../public/arow.svg';
import ArrowIcon from './/arrow.svg';
import {spans} from "next/dist/build/webpack/plugins/profiling-plugin";
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";

export const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {
    const scale = useMotionValue(1);

    // useEffect(() => {
    //     scale.onChange(s => console.log(s));
    // }, []);

    return (
        <motion.button
            whileHover={{scale: 1.05}}
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
            style={{scale}}
            {...props}>
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
            {/*<img src="/arow.svg"/>*/}
                <ArrowIcon/>
        </span>}

        </motion.button>
    );
};
