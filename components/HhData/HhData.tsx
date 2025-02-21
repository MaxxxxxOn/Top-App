import {HhDataProps} from "./hhData.props";
import styles from './HhData.module.css';
import {JSXElement} from "@babel/types";
import {JSX} from "react";
import {className} from "postcss-selector-parser";
import cn from "classnames";
import {Card} from "../Card/Card";
import RateIcon from "../HhData/rate.svg";
import {priceRu} from "../../helpers/helpers";

export const HhData = ({count, juniorSalary, middleSalary, seniorSalary}: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}> Всего ваканский</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}> Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon/>
                        <RateIcon/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}> Средний</div>
                    <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}> Профессионал</div>
                    <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                    </div>
                </div>
            </Card>
        </div>
    );

};