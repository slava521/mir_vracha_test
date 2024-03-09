import {FC, ReactNode} from "react";
import classes from "./inhalerBlock.module.scss";
import Block from "@/app/components/ui/block/Block";
import Number from "@/app/components/ui/number/Number";

type Props = {
    header: ReactNode | string;
    number: number;
    text: ReactNode | string;
}

const InhalerBlock: FC<Props> = ({header,number,  text}) => {
    return (
        <Block className={classes.inhaler}>
            <div className={classes.inhaler__image}>
                <img src="/images/inhaler.svg" alt="Ингалятор"/>
                <Number number={number} position="bottomRight"/>
            </div>
            <h4 className={classes.inhaler__header}>{header}</h4>
            <p>{text}</p>
        </Block>
    );
};

export default InhalerBlock;