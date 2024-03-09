import {FC} from "react";
import Section from "@/app/components/ui/section/Section";
import classes from "./focusSection.module.scss";
import Directions from "@/app/components/directions/Directions";

const FocusSection: FC = () => {
    return (
        <Section header='Терапия ХОБЛ: что в фокусе?'>
            <div className={classes.focus}>
                <div className={classes.focus__header}>
                    <h3>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h3>
                </div>
                <p className={classes.focus__description}>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</p>
                <Directions/>
            </div>
        </Section>
    );
};

export default FocusSection