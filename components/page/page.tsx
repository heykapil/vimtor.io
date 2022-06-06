import { classNames } from "../../lib/style";
import { Router } from "next/router";
import { trackPage } from "../../lib/analytics";
import { NextSeo } from "next-seo";

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
            <NextSeo title={title} description={description} />
            {children}
        </main>
    );
}

export default Page;
