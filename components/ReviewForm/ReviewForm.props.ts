import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    productID: string;
    isOpened: boolean;
}