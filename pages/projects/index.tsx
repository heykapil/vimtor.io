import Emoji from "../../components/emoji";
import ProjectList from "../../components/projects/project-list";
import { useEffect } from "react";
import { Project } from "../../utils/types";
import { useCounter } from "react-use";
import { GetStaticProps } from "next";
import { getProjects, getProjectTypes, getTechnologies } from "../../utils/data";
import LabelFilters, { Label } from "../../components/label-filters";
import EmptyMessage from "../../components/empty-message";
import { useQueryArrayState } from "../../hooks/use-query-state";
import { shuffle } from "lodash";
import Page from "../../components/page/page";
import ProjectItem from "../../components/projects/project-item";
import PageTitle from "../../components/page/page-title";
import PageSubtitle from "../../components/page/page-subtitle";

interface ProjectProps {
    projects: Array<Project>;
    labels: Array<Label>;
}

export default function Projects({ projects, labels }: ProjectProps) {
    const [totalTimesEmptyListWasShown, { inc: incrementTotalTimesEmptyListWasShown }] = useCounter(0);
    const [selectedLabels, setSelectedLabels] = useQueryArrayState("labels");

    const visibleProjects = projects.filter((project) => {
        return selectedLabels.every((slug) => {
            return project.type.fields.slug === slug || project.technologies.some((technology) => technology.fields.slug === slug);
        });
    });

    useEffect(() => {
        if (visibleProjects.length === 0) {
            incrementTotalTimesEmptyListWasShown();
        }
    }, [visibleProjects.length, incrementTotalTimesEmptyListWasShown]);

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
                        <ProjectItem key={project.title} project={project} />
                    ))}
                </ProjectList>
            ) : (
                <EmptyMessage shownCount={totalTimesEmptyListWasShown} />
            )}
        </Page>
    );
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
    const projects = await getProjects();
    const technologies = await getTechnologies();
    const projectTypes = await getProjectTypes();
    const labels: Array<Label> = shuffle([...technologies, ...projectTypes]);
    return {
        props: {
            projects,
            labels,
        },
        revalidate: 10,
    };
};
