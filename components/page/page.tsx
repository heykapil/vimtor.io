import { classNames } from "../../lib/style";
import { NextSeo } from "next-seo";

interface PageProps {
    title: string;
    description?: string;
    className?: string;
    children: any;
}

function Page({ children, title, description, className }: PageProps) {
    return (
        <main className={classNames("sm:mt-8", className)}>
            <NextSeo title={title} description={description} />
            {children}
        </main>
    );
}

export default Page;
