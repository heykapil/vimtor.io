import Emoji from "../../components/emoji";
import ProjectList from "../../components/projects/project-list";
import { useEffect, useMemo, useState } from "react";
import { GetStaticProps } from "next";
import TagFilters from "../../components/tag-filters";
import EmptyMessage from "../../components/empty-message";
import { useQueryArrayState } from "../../hooks/use-query-state";
import Page from "../../components/page/page";
import ProjectItem from "../../components/projects/project-item";
import PageTitle from "../../components/page/page-title";
import PageSubtitle from "../../components/page/page-subtitle";
import { ProjectsPage } from "../../lib/types";
import { getProjectsPage } from "../../lib/sanity/api";

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
            <TagFilters value={selectedTags} labels={tags} onChange={setSelectedTags} />
            {visibleProjects.length !== 0 ? (
                <ProjectList>
                    {visibleProjects.map((project) => (
                        <ProjectItem key={project.name} {...project} />
                    ))}
                </ProjectList>
            ) : (
                <EmptyMessage shownCount={emptyListCount} />
            )}
        </Page>
    );
}

export const getStaticProps: GetStaticProps<ProjectsPage> = async () => {
    return {
        props: await getProjectsPage(),
    };
};
