import Page from "../../components/page/page";
import PageTitle from "../../components/page/page-title";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import RichText from "../../components/rich-text";
import { groq } from "next-sanity";
import { filterDataToSingleItem, getClient, usePreviewSubscription } from "../../lib/sanity/client";
import { truncate } from "lodash";
import { NextSeo } from "next-seo";

interface Article {
    title: string;
    excerpt: string;
    slug: string;
    tags: string[];
    publishedAt: string;
    content: any;
}

export default function ArticlePage({ data, preview }: InferGetStaticPropsType<typeof getStaticProps>) {
    const { data: previewData } = usePreviewSubscription(data?.query, {
        params: data?.variables ?? {},
        initialData: data?.page,
        enabled: preview,
    });

    const article: Article = filterDataToSingleItem(previewData, preview);

    return (
        <Page title={article.title} description={truncate(article.excerpt, { length: 150 })}>
            <NextSeo
                openGraph={{
                    title: article.title,
                    description: truncate(article.excerpt, { length: 120 }),
                    type: "article",
                    locale: "en",
                    images: [{ url: "" }],
                    url: `https://vimtor.io/blog/${article.slug}`,
                    article: {
                        authors: ["Victor Navarro"],
                        tags: article.tags,
                        publishedTime: article.publishedAt,
                    },
                }}
            />
            <article>
                <div className="max-w-lg mx-auto text-center px-3">
                    <PageTitle className="!mb-1">{article.title}</PageTitle>
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
            </article>
        </Page>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const query = groq`*[_type == "article"].slug.current`;
    const slugs = await getClient().fetch<string[]>(query);
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{
    preview: boolean;
    data: { page: Article[]; query: string; variables: any };
}> = async ({ preview = false, params = {} }) => {
    const query = groq`
      *[_type == "article" && slug.current == $slug]{
        ...,
        'slug': slug.current,
        'tags': tags[]->slug.current,
        'excerpt': pt::text(content),
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
    const variables = { slug: params?.slug };
    const data = await getClient(preview).fetch<Article[]>(query, variables);

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
            preview,
            data: {
                page: filterDataToSingleItem(data, preview),
                query,
                variables,
            },
        },
    };
};
