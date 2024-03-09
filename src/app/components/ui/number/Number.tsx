import classes from "./number.module.scss";
import {FC} from "react";

type Props = {
    number: number;
    position?: 'topLeft' | 'bottomRight'
}

const Number:FC<Props> = ({number, position}) => {
    const positionClass = position ? classes[`number--${position}`] : ''

    return (
        <div className={`${classes.number} ${positionClass}`}>
            {number}
        </div>
    );
};

export default Number;