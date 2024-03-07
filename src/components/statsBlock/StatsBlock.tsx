import {FC, ReactNode} from "react";
import classes from "./statsBlock.module.css";

type Props = {
    imageUrl: string;
    percent: string;
    disease: string;
    research: string;
    remark: boolean
}

const StatsBlock: FC<Props> = ({imageUrl, percent, disease, research, remark}) => {
    return (
        <div className={classes.content}>
            <img className={classes.image} src={imageUrl} alt='Заболевание'/>
            <p className={classes.percent}>{percent}%</p>
            <p className={classes.disease}>пациентов с <b>{disease}</b>{remark ? <sup>1</sup>:null}</p>
            <p className={classes.research}>{research}</p>
        </div>
    );
};

export default StatsBlock;