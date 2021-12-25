import Emoji from "../../components/emoji";
import ProjectList from "../../components/projects/project-list";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import LabelFilters, { Label } from "../../components/label-filters";
import EmptyMessage from "../../components/empty-message";
import { useQueryArrayState } from "../../hooks/use-query-state";
import Page from "../../components/page/page";
import ProjectItem from "../../components/projects/project-item";
import PageTitle from "../../components/page/page-title";
import PageSubtitle from "../../components/page/page-subtitle";
import graphCms from "../../utils/graph-cms";
import { shuffle } from "lodash";
import { ProjectSummaryFragment } from "../../utils/schema";

interface ProjectsProps {
    projects: Array<ProjectSummaryFragment>;
    labels: Array<Label>;
}

export default function Projects({ projects, labels }: ProjectsProps) {
    const [emptyListCount, setEmptyListCount] = useState(0);
    const [selectedLabels, setSelectedLabels] = useQueryArrayState("labels");

    const visibleProjects = projects.filter((project) => {
        return selectedLabels.every((slug) => {
            return project.type?.slug === slug || project.technologies.some((technology) => technology.slug === slug);
        });
    });

    useEffect(() => {
        if (visibleProjects.length === 0) {
            setEmptyListCount((c) => c + 1);
        }
    }, [visibleProjects.length]);

    return (
        <Page title="Projects" description="List of projects made by Victor Navarro">
            <PageTitle>
                All my projects <Emoji label="rocket" icon="🚀" reset={false} animation="rocket" />
            </PageTitle>
            <PageSubtitle>A list of projects I worked on that are worth mentioning</PageSubtitle>
            <LabelFilters value={selectedLabels} labels={labels} onChange={setSelectedLabels} />
            {visibleProjects.length !== 0 ? (
                <ProjectList>
                    {projects.map((project) => (
                        <ProjectItem key={project.slug} {...project} />
                    ))}
                </ProjectList>
            ) : (
                <EmptyMessage shownCount={emptyListCount} />
            )}
        </Page>
    );
}

export const getServerSideProps: GetServerSideProps<ProjectsProps> = async (context) => {
    const { projects, projectTypes, technologies } = await graphCms.getProjectsPage();

    const labels = shuffle([...projectTypes, ...technologies]);
    if (context.query.labels) {
        const selectedLabels = (context.query.labels as string).split(",");
        labels.sort(({ slug }) => (selectedLabels.includes(slug) ? -1 : 1));
    }

    return {
        props: {
            projects,
            labels,
        },
    };
};
