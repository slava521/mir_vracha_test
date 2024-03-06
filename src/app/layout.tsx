import type {Metadata} from "next";
import "./globals.css";
import classes from "./layout.module.css";
import Container from "@/components/ui/container/Container";

export const metadata: Metadata = {
    title: "ХОБЛ",
    description: "",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="ru">
        <body>
            <div className={classes.blueLine}/>
            <div className={classes.greenLine}/>
            <div className={classes.yellowLine}/>
            <Container>
                {children}
            </Container>
        </body>
        </html>
    );
}
