import { classNames } from "../../lib/style";
import Head from "next/head";
import { Router } from "next/router";
import { trackPage } from "../../lib/analytics";

interface PageProps {
    title: string;
    description?: string;
    className?: string;
    children: any;
}

Router.events.on("routeChangeComplete", trackPage);

function Page({ children, title, description, className }: PageProps) {
    return (
        <main className={classNames("sm:mt-8", className)}>
            <Head>
                <title>{title} - Victor Navarro</title>
                <meta name="description" content={description} />
            </Head>
            {children}
        </main>
    );
}

export default Page;
