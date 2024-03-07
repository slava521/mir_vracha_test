import Section from "@/components/ui/section/Section";
import Myth from "@/components/myth/Myth";
import {FC, ReactNode} from "react";
import classes from "./mythsBlock.module.css";

type Myths = {
    id: number
    iconSrc: string;
    header: string | ReactNode;
    hand: 'blue' | 'green';
    text: string;
}[]

const myths: Myths = [
    {
        id: 1,
        iconSrc: '/images/man.svg',
        header: <>ХОБЛ болеют <b>преимущественно мужчины?</b></>,
        hand: 'blue',
        text: 'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...'
    },
    {
        id: 2,
        iconSrc: '/images/stats.svg',
        header: <><b>Опасно</b> не наличие заболевания, а обострения?</>,
        hand: 'green',
        text: 'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...'
    }
]

const MythsBlock: FC = () => {
    return (
        <Section header='ХОБЛ: мифы и реальность'>
            <div className={classes.myths}>
                {myths.map(myth=> (
                    <Myth key={myth.id} {...myth}/>
                ))}
            </div>
        </Section>
    );
};

export default MythsBlock;