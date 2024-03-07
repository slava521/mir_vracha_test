import {FC, ReactNode} from "react";
import classes from "./inhalerBlock.module.css";
import Block from "@/components/ui/block/Block";

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
                <div className={classes.number}>
                    <p>{number}</p>
                </div>
            </div>
            <h4 className={classes.header}>{header}</h4>
            <p>{text}</p>
        </Block>
    );
};

export default InhalerBlock;