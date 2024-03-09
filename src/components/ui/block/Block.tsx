import {FC, PropsWithChildren} from "react";
import classes from "./block.module.scss";

type Props = PropsWithChildren & {
    className?: string;
}

const Block: FC<Props> = ({className, children}) => {
    return (
        <div className={`${classes.block} ${className}`}>
            {children}
        </div>
    );
};

export default Block;