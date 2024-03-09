import classes from "./number.module.scss";
import {FC} from "react";

type Props = {
    number: number;
    position?: 'topLeft' | 'bottomRight'
}

const Number:FC<Props> = ({number, position}) => {
    const positionClass = position ? classes[position] : ''

    return (
        <div className={`${classes.number} ${positionClass}`}>
            <p>{number}</p>
        </div>
    );
};

export default Number;