import { classNames } from "../../utils/style";
import Head from "next/head";

interface PageProps {
    title: string;
    description?: string;
    className?: string;
    children: any;
}

function Page({ children, title, description, className }: PageProps) {
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

export default Page;
