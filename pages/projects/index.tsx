import Emoji from "../../components/emoji";
import ProjectList from "../../components/project-list";
import { useEffect, useMemo, useState } from "react";
import { GetStaticProps } from "next";
import TagFilters from "../../components/tag-filters";
import EmptyMessage from "../../components/empty-message";
import { useQueryArrayState } from "../../hooks/use-query-state";
import Page from "../../components/page/page";
import PageTitle from "../../components/page/page-title";
import PageSubtitle from "../../components/page/page-subtitle";
import { ProjectsPage } from "../../lib/types";
import { getProjectsPage } from "../../lib/sanity/api";
import Link from "../../components/link";

export default function Projects({ projects, tags }: ProjectsPage) {
    const [emptyListCount, setEmptyListCount] = useState(0);
    const [selectedTags, setSelectedTags] = useQueryArrayState("tags");

    const visibleProjects = useMemo(() => {
        return projects.filter((project) => {
            return selectedTags.every((slug) => project.tags.includes(slug));
        });
    }, [selectedTags, projects]);

    useEffect(() => {
        if (visibleProjects.length === 0) {
            setEmptyListCount((c) => c + 1);
        }
    }, [visibleProjects]);

    return (
        <Page title="Projects" description="List of projects made by Victor Navarro">
            <PageTitle>
                All my projects <Emoji label="rocket" icon="🚀" reset={false} animation="rocket" />
            </PageTitle>
            <PageSubtitle>A list of projects I worked on that are worth mentioning</PageSubtitle>
            <TagFilters value={selectedTags} options={tags} onChange={setSelectedTags} />
            {visibleProjects.length !== 0 ? (
                <ProjectList projects={visibleProjects} />
            ) : (
                <EmptyMessage count={emptyListCount}>
                    <EmptyMessage.Option>
                        Oops, seems like you want me to work a bit too much <Emoji label="flushed face" icon="😳" />
                    </EmptyMessage.Option>
                    <EmptyMessage.Option>
                        I haven&apos;t build that yet <Emoji label="smiling face with sunglasses" icon="😎" />
                    </EmptyMessage.Option>
                    <EmptyMessage.Option>
                        Are you that interested?
                        <br />
                        We can <Link href="/contact">build that together</Link>
                    </EmptyMessage.Option>
                    <EmptyMessage.Option>
                        We can get married if you insist <Emoji label="wedding ring" icon="💍" />
                    </EmptyMessage.Option>
                    <EmptyMessage.Option>I&apos;m sure you have better things to do...</EmptyMessage.Option>
                    <EmptyMessage.Option>
                        I leave you with{" "}
                        <Link href="https://www.youtube.com/watch?v=4dC_nRYIDZU">something interesting</Link> to watch.
                        <br />
                        Sayonara baby!
                    </EmptyMessage.Option>
                </EmptyMessage>
            )}
        </Page>
    );
}

export const getStaticProps: GetStaticProps<ProjectsPage> = async () => {
    return {
        props: await getProjectsPage(),
    };
};
