import {FC} from "react";
import Section from "@/components/ui/section/Section";
import classes from "./focusSection.module.css";
import Directions from "@/components/directions/Directions";

const FocusSection: FC = () => {
    return (
        <Section header='Терапия ХОБЛ: что в фокусе?'>
            <div className={classes.content}>
                <div className={classes.header}>
                    <h3>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h3>
                </div>
                <p className={classes.description}>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</p>
                <Directions/>
            </div>
        </Section>
    );
};

export default FocusSection