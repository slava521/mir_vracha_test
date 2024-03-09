import {FC} from "react";
import classes from "./statsBlock.module.scss";

type Props = {
    imageUrl: string;
    percent: string;
    disease: string;
    research: string;
    remark: boolean
}

const StatsBlock: FC<Props> = ({imageUrl, percent, disease, research, remark}) => {
    return (
        <div className={classes.stats}>
            <img className={classes.stats__image} src={imageUrl} alt='Заболевание'/>
            <p className={classes.stats__percent}>{percent}%</p>
            <p className={classes.stats__disease}>пациентов с <b>{disease}</b>{remark ? <sup>1</sup>:null}</p>
            <p className={classes.stats__research}>{research}</p>
        </div>
    );
};

export default StatsBlock;