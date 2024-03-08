import {useEffect} from "react";

export const useScrollLock = (shouldBeLocked: boolean) => {
    useEffect(() => {
        const body = document.querySelector('body')
        if (body) {
            body.style.overflowY = shouldBeLocked ? 'hidden':''
        }
    }, [shouldBeLocked]);
}