import Page from "../../components/page/page";
import PageTitle from "../../components/page/page-title";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import RichText from "../../components/rich-text";
import { groq } from "next-sanity";
import { filterDataToSingleItem, getClient, usePreviewSubscription } from "../../lib/sanity/client";
import { Article } from "../../lib/types";

export default function ArticlePage({ data, preview }: InferGetStaticPropsType<typeof getStaticProps>) {
    const { data: previewData } = usePreviewSubscription(data?.query, {
        params: data?.params ?? {},
        initialData: data?.page,
        enabled: preview,
    });

    const article = filterDataToSingleItem(previewData, preview);

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
                <main className="prose prose-h2:mb-3 mx-auto px-3 pb-12">
                    <RichText content={article.content} />
                </main>
                <div></div>
            </article>
        </Page>
    );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    const query = groq`*[_type == "article"].slug.current`;
    const slugs = await getClient().fetch<string[]>(query);
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{
    preview?: boolean;
    data: { page: Article[]; query: string; params: any };
}> = async (context) => {
    const query = groq`
      *[_type == "article" && slug.current == $slug]{
        ...,
        'content': content[]{
          ...select(
            _type == "image" => {
              ...,
              "asset": asset->
            },
            _type != "image" => {
              ...
            }
          )
        }
      }
    `;
    const params = { slug: context.params?.slug };
    const data = await getClient(context.preview).fetch<Article[]>(query, params);

    if (!data) {
        return {
            notFound: true,
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            preview: context.preview,
            data: {
                page: filterDataToSingleItem(data, context.preview),
                query,
                params,
            },
        },
    };
};
