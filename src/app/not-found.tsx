import Link from 'next/link'
import Section from "@/app/components/ui/section/Section";

const NotFound = () => {
    return (
        <Section header='404 Not Found'>
            <p>Других страниц нет, можешь даже не пытаться</p>
            <Link href="/">Вернуться на главную страницу</Link>
        </Section>
    );
};

export default NotFound;