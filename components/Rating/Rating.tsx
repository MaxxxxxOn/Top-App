import {RatingProps} from "./Rating.props";
import styles from './Rating.module.css';
import {JSXElement} from "@babel/types";
import React, {JSX, useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef} from "react";
import {className} from "postcss-selector-parser";
import cn from "classnames";
import {number} from "prop-types";
import StarIcon from './star.svg';


// eslint-disable-next-line react/display-name
export const Rating = forwardRef (({isEditable = false, error, rating, setRating, tabIndex, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                // eslint-disable-next-line react/jsx-key
                <span
                    className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable
                })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                    role={isEditable ? 'slider' : ''}
                    aria-invalid={error ? true : false}
                    aria-valuenow={rating}
                    aria-valuemax={5}
                    aria-label={isEditable ? 'Укажите рейтинг нажатием на пробел' : ('рейтинг' + rating)}
                    aria-valuemin={1}
                    >
                <StarIcon

                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                />
                    </span>
            );
        });
        setRatingArray(updateArray);
    };
    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };
    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {

        if (e.code != 'Space' || !setRating) {
            return;
        }
        e.preventDefault();

        setRating(i);
    };

    return (
        <div className={cn( styles.ratingWrapper, {
            [styles.error]: error
        })} {...props} ref={ref}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span role={"alert"} className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});