import {FC, PropsWithChildren} from "react";
import classes from "./section.module.scss";

type Props = PropsWithChildren & {
    header: string;
}

const Section: FC<Props> = ({header, children}) => {
    return (
        <section className={classes.section}>
            <h2 className={classes.section__header}>
                {header}
            </h2>
            <div>
                {children}
            </div>
        </section>
    );
};

export default Section;