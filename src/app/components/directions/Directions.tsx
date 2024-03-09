"use client"

import {FC} from "react";
import InhalerBlock from "@/app/components/inhalerBlock/InhalerBlock";
import classes from "./directions.module.scss";
import Block from "@/app/components/ui/block/Block";
import {useBreakpoints} from "@/hooks/useBreakpoints/useBreakpoints";
import Number from "@/app/components/ui/number/Number";

const Directions: FC = () => {
    const {isLaptop, isTablet, isMobile} = useBreakpoints()
    const isSmallWindow = isLaptop || isTablet || isMobile;

    return (
        <div>
            <div className={classes.inhalers}>
                <InhalerBlock
                    number={1}
                    header={<>Ингаляционный <b>антихолинергик</b></>}
                    text={<>
                        Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный
                        антагонизм за взаимодействие с эффекторными мускариновыми рецепторами,
                        дополняет и потенцирует эффект β2-агонистов<sup>1</sup>
                    </>}
                />
                <InhalerBlock
                    number={2}
                    header={<>Ингаляционный <b className={classes.noWrap}>β2-агонист</b></>}
                    text='Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции'
                />
                <InhalerBlock
                    number={3}
                    header={<>Ингаляционный <b>глюкокортикостероид</b> (ИГКС)</>}
                    text='Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей'
                />
            </div>
            {!isSmallWindow && (
                <div className={classes.inhalers__rows}>
                    <img src='/ui/arrow.svg' alt='Стрелка'/>
                    <img src='/ui/arrow.svg' alt='Стрелка'/>
                </div>
            )}
            <div className={classes.inhalers__rows}>
                <Block className={classes.inhalers__rows__textBlock}>
                    <p>
                        Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;
                    </p>
                    <p>
                        Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и
                        длительнодействующих антихолинергиков (ДДАХ),
                        действие которых дополняет и усиливает друг друга<sup>1</sup>.
                    </p>
                    {isSmallWindow && (
                        <>
                            <Number number={1} position="topLeft"/>
                            <Number number={2} position="bottomRight"/>
                        </>
                    )}
                </Block>
                <Block className={classes.inhalers__rows__textBlock}>
                    <p>
                        Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1
                        тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение
                        к ДДБА;
                    </p>
                    <p>
                        Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с
                        ХОБЛ снижает госпитальную летальность по сравнению с пациентами,
                        принимавшими только ДДБА (8,1% vs 13,2%)<sup>1</sup>.
                    </p>
                    {isSmallWindow && (
                        <>
                            <Number number={2} position="topLeft"/>
                            <Number number={3} position="bottomRight"/>
                        </>
                    )}
                </Block>
            </div>
        </div>
    );
};

export default Directions;