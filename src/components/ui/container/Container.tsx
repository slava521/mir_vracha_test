import {FC, PropsWithChildren} from "react";
import classes from "./container.module.css";

const Container:FC<PropsWithChildren> = ({children}) => {
    return (
        <main className={classes.container}>
            {children}
        </main>
    );
};

export default Container;