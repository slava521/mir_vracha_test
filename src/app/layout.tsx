import type {Metadata} from "next";
import "./globals.css";
import classes from "./layout.module.css";
import Container from "@/components/ui/container/Container";
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
            <div className={`${classes.backgroundLine} ${classes.blueLine}`}/>
            <div className={`${classes.backgroundLine} ${classes.greenLine}`}/>
            <div className={`${classes.backgroundLine} ${classes.yellowLine}`}/>
            <Container>
                {children}
            </Container>
        </body>
        </html>
    );
}
