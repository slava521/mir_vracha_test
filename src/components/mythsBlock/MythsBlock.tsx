"use client"

import Section from "@/components/ui/section/Section";
import Myth from "@/components/myth/Myth";
import {FC, ReactNode} from "react";
import classes from "./mythsBlock.module.css";
import {useModal} from "@/hooks/useModal/useModal";

type Myths = {
    iconSrc: string;
    header: string | ReactNode;
    hand: 'blue' | 'green';
    text: string;
}[]

const myths: Myths = [
    {
        iconSrc: '/images/man.svg',
        header: <>ХОБЛ болеют <b>преимущественно мужчины?</b></>,
        hand: 'blue',
        text: 'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...'
    },
    {
        iconSrc: '/images/stats.svg',
        header: <><b>Опасно</b> не наличие заболевания, а обострения?</>,
        hand: 'green',
        text: 'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...'
    }
]

const MythsBlock: FC = () => {
    const [openSpreadModal, SpreadModal] = useModal();
    const [openSurvivalModal, SurvivalModal] = useModal();

    return (
        <Section header='ХОБЛ: мифы и реальность'>
            <div className={classes.myths}>
                <Myth {...myths[0]} onClick={openSpreadModal} />
                <Myth {...myths[1]} onClick={openSurvivalModal} />
            </div>
            <SpreadModal>
                modal1
            </SpreadModal>
            <SurvivalModal>
                modal2
            </SurvivalModal>
        </Section>
    );
};

export default MythsBlock;