import Head from "next/head";

interface LayoutProps {
    title: string;
    description?: string;
}

const SEO = ({ title, description }: LayoutProps) => {
    return (
        <Head>
            <title>{title} - Victor Navarro</title>
            <meta name="description" content={description} />
        </Head>
    );
};

export default SEO;
