import {ReviewFormProps} from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import {JSX, useState} from "react";
import cn from "classnames";
import UserIcon from "./user.svg"
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {Rating} from "../Rating/Rating";
import {Input} from "../Input/Input";
import {Textarea} from "../Textarea/Textarea";
import {Button} from "../Button/Button";
import CloseIcon from "./close.svg"
import CloserIcon from "./closer.svg"
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSentResponse} from "./ReviewForm.interface";
import axios from "axios";
import {API} from "../../helpers/api";

export const ReviewForm = ({productID, isOpened, className, ...props}: ReviewFormProps): JSX.Element => {
    const {
        register, control, handleSubmit,
        formState: {errors}, reset, clearErrors
    } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productID});
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('Что-то пошло не так');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)}
                 {...props}>
                <Input {...register('name', {required: {value: true, message: 'Заполните имя'}})}
                       placeholder={'Имя'} error={errors.name} tabIndex={isOpened ? 0 : -1}
                       aria-invalid={errors.name ? true : false}/>
                <Input {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
                       placeholder={'Заголовок отзыва'} className={styles.title} error={errors.title}
                       tabIndex={isOpened ? 0 : -1} aria-invalid={errors.title ? true : false}/>
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name={'rating'}
                        rules={{required: {value: true, message: 'Поставьте оценку'}}}
                        render={({field}) => (
                            <Rating
                                isEditable rating={field.value} ref={field.ref} setRating={field.onChange}
                                error={errors.rating}
                                tabIndex={isOpened ? 0 : -1}/>
                        )}
                    />

                </div>
                <Textarea {...register('description', {required: {value: true, message: 'Заполните описание'}})}
                          placeholder={'Текст отзыва'} className={styles.description}
                          error={errors.description} tabIndex={isOpened ? 0 : -1} aria-label={'Текст отзыва'}
                          aria-invalid={errors.description ? true : false}/>
                <div className={styles.submit}>
                    <Button appearance={"primary"} tabIndex={isOpened ? 0 : -1}
                            onClick={() => clearErrors()}>Отправить</Button>
                    <span
                        className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.success, styles.panel)} role={"alert"}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
                <button onClick={() => setIsSuccess(false)}
                        aria-label={"Закрыть оповещение"}
                        className={styles.close}>
                    <CloseIcon/>

                </button>
            </div>}
            {error && <div className={cn(styles.error, styles.panel)} role={"alert"}>
                Что-то пошло не так, попробуйте обновиить страницу
                <button onClick={() => setError(undefined)}
                        aria-label={"Закрыть оповещение"}
                        className={styles.close}>
                    <CloseIcon/>
                </button>

            </div>}

        </form>
    )

};