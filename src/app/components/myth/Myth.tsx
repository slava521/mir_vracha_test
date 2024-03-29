import {FC, ReactNode} from "react";
import classes from "./myth.module.scss";

type Props = {
    iconSrc: string;
    header: string | ReactNode;
    hand: 'green' | 'blue';
    text: string;
    onClick: VoidFunction;
}

const Myth: FC<Props> = ({iconSrc, header, hand, text, onClick}) => {
    return (
        <div className={classes.myth} onClick={onClick}>
            <div className={classes.myth__icon}>
                <img className={classes.myth__icon__img} src={iconSrc} alt={'Иконка'}/>
            </div>
            <div className={classes.myth__header}>
                <h4>{header}</h4>
            </div>
            <div className={classes.myth__text}>
                <p>{text}</p>
                <div className={classes.myth__text__blur}/>
            </div>
            <img className={classes.myth__hand} src={`/images/${hand}-hand.svg`} alt='Тык'/>
        </div>
    );
};

export default Myth;