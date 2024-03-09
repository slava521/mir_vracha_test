import type {Metadata} from "next";
import "./globals.scss";
import classes from "./layout.module.scss";
import Container from "@/app/components/ui/container/Container";
import {NotoSans} from "@/app/fonts";

export const metadata: Metadata = {
    title: "ХОБЛ",
    description: "ХОБЛ: мифы и реальность. Терапия ХОБЛ: что в фокусе?",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="ru">
        <body className={NotoSans.className}>
            <div className={`${classes.backgroundLine} ${classes.backgroundLine__blue}`}/>
            <div className={`${classes.backgroundLine} ${classes.backgroundLine__green}`}/>
            <div className={`${classes.backgroundLine} ${classes.backgroundLine__yellow}`}/>
            <Container>
                {children}
            </Container>
        </body>
        </html>
    );
}
