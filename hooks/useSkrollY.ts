import {useEffect, useState} from "react";

export const useSkrollY = (): number =>{

    const isBrowser = typeof window !== 'undefined';

    const [scrollY, setScrollY] = useState<number>(0)

    const handleSkroll = () => {
        const currentScrollY = isBrowser ? window.scrollY : 0;
        setScrollY(currentScrollY);
    };


    useEffect(() => {
        window.addEventListener('scroll', handleSkroll, {passive: true});

        return () => window.removeEventListener('scroll', handleSkroll);
        }, []);
    return scrollY;
};