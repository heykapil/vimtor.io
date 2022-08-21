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
  images: string[];
  publishedAt: string;
  content: any;
}

function getOpenGraphImage({ title, images }: { title: string; images: string[] }) {
  const remoteUrl = `https://www.vimtor.io`;
  const localUrl = `http://localhost:3000`;
  const baseUrl = process.env.NODE_ENV === "development" ? localUrl : remoteUrl;
  const ogImageUrl = new URL(baseUrl);
  ogImageUrl.pathname = `/api/og-image`;
  ogImageUrl.searchParams.append(`title`, title);
  ogImageUrl.searchParams.append(`images`, images?.join("$$$$"));
  return ogImageUrl.toString();
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
          locale: "en",
          type: "article",
          title: article.title,
          description: truncate(article.excerpt, { length: 120 }),
          url: `https://vimtor.io/blog/${article.slug}`,
          images: [
            {
              url: getOpenGraphImage({ title: article.title, images: article.images }),
              width: 1280,
              height: 720,
            },
          ],
          article: {
            authors: ["Victor Navarro"],
            tags: article.tags,
            publishedTime: article.publishedAt,
          },
        }}
      />
      <article>
        <div className="max-w-2xl mx-auto text-center px-3">
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
        'images': technologies[]->icon.asset->url,
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
  const data = await getClient(true).fetch<Article[]>(query, variables);
  const page = filterDataToSingleItem(data, preview);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      data: {
        page,
        query,
        variables,
      },
    },
  };
};
