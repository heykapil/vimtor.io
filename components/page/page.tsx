import { classNames } from "../../utils/style";
import Head from "next/head";
import { Router } from "next/router";
import { trackPage } from "../../utils/analytics";

interface PageProps {
    title: string;
    description?: string;
    className?: string;
    children: any;
}

Router.events.on("routeChangeComplete", trackPage);

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
