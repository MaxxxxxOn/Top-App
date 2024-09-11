import {TextareaProps} from "./Textarea.props";
import styles from './Textarea.module.css';
import {ForwardedRef, forwardRef, JSX, TextareaHTMLAttributes} from "react";
import cn from "classnames";

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef(({
                                        error,
                                        className,
                                        ...props
                                    }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(styles.textareaWrapper, className)}>
        <textarea className={cn(styles.textarea, {
            [styles.error]: error
        })} ref={ref} {...props}/>
            {error && <span role={"alert"} className={styles.errorMessage}>{error.message}</span>}
        </div>
    )

});