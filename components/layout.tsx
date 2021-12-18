import { classNames } from "../utils/style";
import Head from "next/head";

interface LayoutProps {
    title: string;
    description?: string;
    className?: string;
    children: any;
}

function Layout({ children, title, description, className }: LayoutProps) {
    return (
        <main className={classNames("shrink-0 grow", className)}>
            <Head>
                <title>{title} - Victor Navarro</title>
                <meta name="description" content={description} />
            </Head>
            {children}
        </main>
    );
}

export default Layout;
