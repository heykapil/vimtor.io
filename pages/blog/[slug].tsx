import Page from "../../components/page/page";
import PageTitle from "../../components/page/page-title";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getArticleBySlug, getArticleSlugs } from "../../lib/sanity/api";
import { Article } from "../../lib/types";
import RichText from "../../components/rich-text";

export default function ArticlePage({ article }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Page title={article.title} description="">
            <article>
                <div className="max-w-lg mx-auto text-center px-3">
                    <PageTitle className="!mb-1 ">{article.title}</PageTitle>
                    <p className="text-lg">by Victor Navarro</p>
                </div>
                <div className="flex items-center gap-x-4 my-8">
                    <div className="h-px bg-gray-200 w-full" />
                    <p className="shrink-0 text-gray-400 text-lg">
                        {new Date(article.publishedAt).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                            day: "numeric",
                        })}
                    </p>
                    <div className="h-px bg-gray-200 w-full" />
                </div>
                <main className="prose mx-auto px-3 pb-12">
                    <RichText content={article.content} />
                </main>
                <div></div>
            </article>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<{ article: Article }, { slug: string }> = async (context) => {
    const slug = context.params?.slug;
    if (!slug) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    const article = await getArticleBySlug(slug);
    return {
        revalidate: 3600,
        props: {
            article,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getArticleSlugs();
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
};
