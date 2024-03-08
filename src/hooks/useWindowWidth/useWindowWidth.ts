"use client"

import {useEffect, useState} from "react";

type ReturnType = {
    isLaptop:boolean,
    isTablet:boolean,
    isMobile:boolean
}

export const useWindowWidth = (): ReturnType => {
    const [width, setWidth] = useState<number>(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    });

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        isLaptop: width <= 1024 && width>768,
        isTablet: width <= 768 && width>320,
        isMobile: width <= 320
    }
}