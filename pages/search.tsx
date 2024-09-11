import {Htag} from "../components/Htag/Htag";
import {Button, Rating} from "../components";
import {P} from "../components";
import {Tag} from "../components";
import React, {JSX, useEffect, useState} from "react";
import {Layout} from "../layout/Layout";
import {withLayout} from "../layout/Layout";
import {GetStaticProps, GetStaticPropsResult} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interfase";
import {API} from "../helpers/api";

function Search(): JSX.Element{
       return (
        <>
            Search
        </>
    );
};

export default withLayout(Search);

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
