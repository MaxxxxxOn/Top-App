import {LayoutProps} from "./Layout.props";
import styles from './Layout.module.css';
import {JSXElement} from "@babel/types";
import {Component, FunctionComponent, JSX, KeyboardEvent, useRef, useState} from "react";
import {className} from "postcss-selector-parser";
import cn from "classnames";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Sidebar} from "../Sidebar/Sidebar";
import React from "react";
import {string} from "prop-types";
import {AppContext, AppContextProvider, IAppContext} from "../context/app.context";
import {Up} from "../components";

 export const Layout=({ children}: LayoutProps): JSX.Element =>{

     const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
     const bodyRef = useRef<HTMLDivElement>(null);

     const skipContentAction = (key: KeyboardEvent) => {
         if (key.code == 'Space' || key.code == 'Enter') {
             key.preventDefault();
            bodyRef.current?.focus();
         }
         setIsSkipLinkDisplayed(false);
     };


     return (
      <div className={styles.wrapper}>
          <a
              onFocus={() => setIsSkipLinkDisplayed(true)}
              tabIndex={0}
              className={cn(styles.skipLink, {
              [styles.displayed]:isSkipLinkDisplayed})}
              onKeyDown={skipContentAction}
          >
              Сразу к содержанию</a>
      <Header className={styles.header}/>
              <Sidebar className={styles.sidebar}/>
              <main className={styles.body} ref={bodyRef} tabIndex={0}>
                  {children}
              </main>
          <Footer className={styles.footer}/>
          <Up/>
      </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) =>{
    return function withLayoutComponent(props: T): JSX.Element{
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
            <Layout>
                <Component {...props}/>
            </Layout>
            </AppContextProvider>
        );
    };
};