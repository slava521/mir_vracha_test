"use client"

import {useEffect} from "react";

export const useScrollLock = (shouldBeLocked: boolean) => {
    useEffect(() => {
        document.body.style.overflowY = shouldBeLocked ? 'hidden':''
    }, [shouldBeLocked]);
}