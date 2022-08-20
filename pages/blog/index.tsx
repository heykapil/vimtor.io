import Page from "../../components/page/page";
import PageTitle from "../../components/page/page-title";
import PageSubtitle from "../../components/page/page-subtitle";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { groupBy } from "lodash";
import Link from "../../components/link";
import Emoji from "../../components/emoji";
import TagFilters from "../../components/tag-filters";
import { useQueryArrayState } from "../../hooks/use-query-state";
import EmptyMessage from "../../components/empty-message";
import { useEffect, useMemo, useState } from "react";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity/client";

function formatMonth(date: Date) {
    const month = date.toLocaleString("default", { month: "long" });
    return `${month} ${date.getDate()}`;
}

function useSelectedTags() {
    return useQueryArrayState("tags");
}

interface Article {
    title: string;
    slug: string;
    publishedAt: string;
    tags: Array<{ value: string; label: string }>;
    content: any;
}

export interface BlogPage {
    articles: Array<Article>;
    tags: Array<{ value: string; label: string }>;
}

function ArticleItem({ article }: { article: Article }) {
    const [selectedTags, setSelectedTags] = useSelectedTags();
    return (
        <li className="flex items-start justify-between sm:text-lg">
            <div className="sm:flex gap-x-4 flex-wrap">
                <p className="w-28">{formatMonth(new Date(article.publishedAt))}</p>
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
            </div>
        </li>
    );
}

function ArticleList({ articles }: { articles: Article[] }) {
    const [selectedTags] = useSelectedTags();
    const [emptyListCount, setEmptyListCount] = useState(0);

    const visibleArticles = useMemo(() => {
        return articles.filter((article) => {
            return selectedTags.every((tag) => article.tags?.map((tag) => tag.value).includes(tag));
        });
    }, [articles, selectedTags]);

    useEffect(() => {
        if (visibleArticles.length === 0 && selectedTags.length > 0) {
            setEmptyListCount((c) => c + 1);
        }
    }, [visibleArticles, selectedTags]);

    if (selectedTags.length === 0) {
        const articlesByYear = groupBy(articles, (article) => new Date(article.publishedAt).getFullYear());
        return (
            <div className="space-y-4">
                {Object.entries(articlesByYear).map(([year, articles]) => (
                    <section key={year}>
                        <header className="sticky top-0 flex items-center gap-x-4 bg-white py-1 -mr-3 sm:mr-0">
                            <h2 className="text-2xl font-bold">{year}</h2>
                            <div className="h-px bg-gray-200 w-full relative" />
                        </header>
                        <ul className="space-y-4 sm:space-y-2 mt-3">
                            {articles.map((article) => (
                                <ArticleItem key={article.slug} article={article} />
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        );
    }

    if (visibleArticles.length === 0) {
        return (
            <EmptyMessage count={emptyListCount}>
                <EmptyMessage.Option>
                    A weird combination don&apos;t you think? <Emoji label="weird face" icon="🥴" />
                </EmptyMessage.Option>
                <EmptyMessage.Option>
                    Shakespeare would be proud of that <Emoji label="writer" icon="🪶" />
                </EmptyMessage.Option>
                <EmptyMessage.Option>I&apos;m sure you have better things to do...</EmptyMessage.Option>
                <EmptyMessage.Option>
                    Are you that interested?
                    <br />
                    We can <Link href="/contact">write that together</Link>
                </EmptyMessage.Option>
            </EmptyMessage>
        );
    }

    return (
        <ul className="space-y-2">
            {articles
                .filter((article) => article.tags?.some((tag) => selectedTags.includes(tag.value)))
                .map((article) => (
                    <ArticleItem key={article.slug} article={article} />
                ))}
        </ul>
    );
}

export default function Blog({ articles, tags }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [selectedTags, setSelectedTags] = useSelectedTags();

    return (
        <Page title="Articles" description="My best and only articles" className="min-h-[50vh]">
            <PageTitle>
                Articles <Emoji label="newspaper" icon="📰" />
            </PageTitle>
            <PageSubtitle>My best and only articles until now</PageSubtitle>
            <TagFilters value={selectedTags} options={tags} onChange={setSelectedTags} />
            <main className="px-3 mt-4 w-full mx-auto space-y-4 sm:px-6 sm:max-w-2xl">
                <ArticleList articles={articles} />
            </main>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<BlogPage> = async () => {
    const query = groq`
      {
        'articles': *[_type == "article"]{
          title,
          content,
          publishedAt,
          'slug': slug.current,
          'tags': tags[]->{
            'label': name,
            'value': slug.current
          }
        } | order(publishedAt desc),
        'tags': *[_type == "articleTag"]{
          'label': name,
          'value': slug.current
        }
      }
    `;
    return {
        revalidate: 3600,
        props: await getClient(false).fetch<BlogPage>(query),
    };
};
