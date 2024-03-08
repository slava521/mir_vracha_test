import {FC, ReactNode} from "react";
import classes from "./inhalerBlock.module.css";
import Block from "@/components/ui/block/Block";
import Number from "@/components/ui/number/Number";

type Props = {
    header: ReactNode | string;
    number: number;
    text: ReactNode | string;
}

const InhalerBlock: FC<Props> = ({header,number,  text}) => {
    return (
        <Block className={classes.block}>
            <div className={classes.image}>
                <img src="/images/inhaler.svg" alt="Ингалятор"/>
                <Number number={number} position="bottomRight"/>
            </div>
            <h4 className={classes.header}>{header}</h4>
            <p>{text}</p>
        </Block>
    );
};

export default InhalerBlock;