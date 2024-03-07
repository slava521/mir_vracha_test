import {FC} from "react";
import Section from "@/components/ui/section/Section";
import classes from "./focusBlock.module.css";
import DirectionsBlock from "@/components/directionsBlock/DirectionsBlock";

const FocusBlock: FC = () => {
    return (
        <Section header='Терапия ХОБЛ: что в фокусе?'>
            <div>
                <div className={classes.header}>
                    <h3>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h3>
                </div>
                <p className={classes.description}>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</p>
                <DirectionsBlock/>
            </div>
        </Section>
    );
};

export default FocusBlock;