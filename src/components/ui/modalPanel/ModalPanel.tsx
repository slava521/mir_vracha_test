import {FC, PropsWithChildren} from "react";
import classes from "./modalPanel.module.css";

type Props = PropsWithChildren & {
    close: VoidFunction;
}

const ModalPanel: FC<Props> = ({children, close}) => {
    return (
        <>
            <div className={classes.background} onClick={close}/>
            <div className={classes.modal}>
                {children}
            </div>
        </>
    );
};

export default ModalPanel;