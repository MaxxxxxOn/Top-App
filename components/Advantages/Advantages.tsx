import {AdvantagesProps} from "./Advantages.props";
import styles from './Advantages.module.css';
import {JSX} from "react";
import cn from "classnames";
import CheckIcon from "./check.svg";

export const Advantages = ({advantage}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantage.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline}/>
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    );

};