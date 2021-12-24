import Emoji from "../../components/emoji";
import ProjectList from "../../components/projects/project-list";
import { useEffect, useMemo } from "react";
import { useCounter } from "react-use";
import { GetStaticProps } from "next";
import LabelFilters from "../../components/label-filters";
import EmptyMessage from "../../components/empty-message";
import { useQueryArrayState } from "../../hooks/use-query-state";
import Page from "../../components/page/page";
import ProjectItem from "../../components/projects/project-item";
import PageTitle from "../../components/page/page-title";
import PageSubtitle from "../../components/page/page-subtitle";
import graphCms from "../../utils/graphcms";
import { GetProjectsPageQuery } from "../../utils/schema";
import { shuffle } from "lodash";

export default function Projects({ page, projects, projectTypes, technologies }: GetProjectsPageQuery) {
    const [totalTimesEmptyListWasShown, { inc: incrementTotalTimesEmptyListWasShown }] = useCounter(0);
    const [selectedLabels, setSelectedLabels] = useQueryArrayState("labels");

    const labels = useMemo(() => {
        return shuffle([...projectTypes, ...technologies]);
    }, [projectTypes, technologies]);

    const visibleProjects = projects.filter((project) => {
        return selectedLabels.every((slug) => {
            return project.type?.slug === slug || project.technologies.some((technology) => technology.slug === slug);
        });
    });

    useEffect(() => {
        if (visibleProjects.length === 0) {
            incrementTotalTimesEmptyListWasShown();
        }
    }, [visibleProjects.length, incrementTotalTimesEmptyListWasShown]);

    if (!page) {
        return null;
    }

    return (
        <Page title="Projects" description="List of projects made by Victor Navarro">
            <PageTitle>
                {page.title} <Emoji label="rocket" icon="🚀" reset={false} animation="rocket" />
            </PageTitle>
            <PageSubtitle>{page.description}</PageSubtitle>
            <LabelFilters value={selectedLabels} labels={labels} onChange={setSelectedLabels} />
            {visibleProjects.length !== 0 ? (
                <ProjectList>
                    {projects.map((project) => (
                        <ProjectItem key={project.slug} {...project} />
                    ))}
                </ProjectList>
            ) : (
                <EmptyMessage shownCount={totalTimesEmptyListWasShown} />
            )}
        </Page>
    );
}

export const getStaticProps: GetStaticProps<GetProjectsPageQuery> = async () => {
    const response = await graphCms.getProjectsPage();
    return {
        props: response,
        revalidate: 10,
    };
};
