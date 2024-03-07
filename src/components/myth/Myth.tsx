import {FC, ReactNode} from "react";
import classes from "./myth.module.css";

type Props = {
    iconSrc: string;
    header: string | ReactNode;
    hand: 'green' | 'blue';
    text: string;
}

const Myth: FC<Props> = ({iconSrc, header, hand, text}) => {
    return (
        <div className={classes.myth}>
            <div className={classes.icon}>
                <img src={iconSrc} alt={'Иконка'}/>
            </div>
            <div className={classes.header}>
                <h4>{header}</h4>
            </div>
            <div className={classes.text}>
                <p>{text}</p>
                <div className={classes.blur}/>
            </div>
            <img className={classes.hand} src={`/images/${hand}-hand.svg`} alt='Тык'/>
        </div>
    );
};

export default Myth;