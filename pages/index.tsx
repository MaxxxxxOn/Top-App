import {Htag} from "../components/Htag/Htag";
import {Button, Input, Rating, Search, Textarea} from "../components";
import {P} from "../components";
import {Tag} from "../components";
import React, {JSX, useEffect, useState} from "react";
import {Layout} from "../layout/Layout";
import {withLayout} from "../layout/Layout";
import {GetStaticProps, GetStaticPropsResult} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interfase";
import {API} from "../helpers/api";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import Error from "next/error";

// export default function Home(): JSX.Element {
//     const [counter,setCounter] = useState<number>(0); //Реакт Хук
//
//     useEffect(() =>{
//         console.log('Counter' + counter);
//         return function cleanup(){
//             console.log('Unmount');
//         };
//         });
//     useEffect(() =>{
//         console.log('Mounted');
//
//     },[]);
//
//     const [rating, setRating] = useState<number>(4);
function Home({menu}: HomeProps): JSX.Element{
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            {/*<Htag tag='h1'> {counter} </Htag>*/}
            {/*<ButtonIcon appearance="primary" arrow={"right"} onClick={() => setCounter(x=> x+1)}> Кнопка </ButtonIcon>*/}
            <Htag tag='h1'> Заголовок </Htag>
            <Button appearance="primary" arrow={"right"} > Кнопка </Button>
            <Button appearance="ghost"  arrow={"down"}> Кнопка </Button>
            <P size= 'l'> Big</P>
            <P> Medium</P>
            <P size= 's'> Small</P>
            <Tag size='s'> Ghost</Tag>
            <Tag size='m' color="red"> Red</Tag>
            <Tag size='m' color="green"> Green </Tag>
            <Tag color="primary"> Primary</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
            <Input placeholder='Текст'/>
            <Textarea placeholder='Текст'/>


        </>
    );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory= 0;
    const { data:menu }= await axios.post<MenuItem[]>(API.topPage.find,{
        firstCategory
    });
    return{
        props:{
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends  Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
};
