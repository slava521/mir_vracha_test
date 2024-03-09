import StatsBlock from "@/app/components/statsBlock/StatsBlock";
import classes from "./survivalModalContent.module.scss";

type StatsBlocks = {
    id: number;
    imageUrl: string;
    percent: string;
    disease: string;
    research: string;
    remark: boolean
}[]

const statsBlocks: StatsBlocks = [
    {
        id: 1,
        imageUrl: '/images/heart.svg',
        percent: '45,5',
        disease: 'сердечной недостаточностью',
        research: 'Популяционное когортное исследование (N=385)',
        remark: true
    },
    {
        id: 2,
        imageUrl: '/images/heart-attack.svg',
        percent: '55,3',
        disease: 'инфарктом миокарда',
        research: 'Апостериорный анализ когортного исследования (N=2887)',
        remark: true
    },
    {
        id: 3,
        imageUrl: '/images/bladder.svg',
        percent: '50,5',
        disease: 'раком мочевого пузыря',
        research: 'Исследование Национальной статистической службы (N=42642)',
        remark: false
    },
]

const SurvivalModalContent = () => {
    return (
        <>
            <div className={classes.text}>
                <p>
                    <b>
                        Большинство пациентов с ХОБЛ столкнется с обострениями:
                        как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77%
                        пациентов<sup>1</sup>.
                    </b>
                </p>
                <div>
                    <p>
                        В течение 5 лет после первого тяжёлого обострения в живых остаются только 40%
                        пациентов.<sup>2</sup>
                    </p>
                    <p>
                        Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности,
                        инфаркте миокарда и некоторых злокачественных опухолях.
                    </p>
                </div>
            </div>
            <h3 className={classes.header}>
                Пятилетняя выживаемость пациентов
            </h3>
            <div className={classes.blocks}>
                {statsBlocks.map(statsBlock => (
                    <StatsBlock key={statsBlock.id} {...statsBlock}/>
                ))}
            </div>
        </>
    );
};

export default SurvivalModalContent;