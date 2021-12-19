import Emoji from "../../components/emoji";
import ProjectList from "../../components/project-list";
import { useEffect } from "react";
import { Project } from "../../utils/types";
import { useCounter } from "react-use";
import { GetStaticProps } from "next";
import { getProjects, getProjectTypes, getTechnologies } from "../../utils/data";
import Section from "../../components/section";
import LabelFilters, { Label } from "../../components/label-filters";
import EmptyMessage from "../../components/empty-message";
import { useQueryArrayState } from "../../hooks/use-query-state";
import { shuffle } from "lodash";
import Layout from "../../components/layout";

interface ProjectProps {
    projects: Array<Project>;
    labels: Array<Label>;
}

const Projects = ({ projects, labels }: ProjectProps) => {
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
        <Layout title="Projects" description="List of projects made by Victor Navarro">
            <Section className="text-center mt-24 sm:mt-32">
                <Section.Title>
                    All my projects <Emoji label="rocket" icon="🚀" reset={false} animation="rocket" />
                </Section.Title>
                <Section.Subtitle>A list of projects I worked on that are worth mentioning</Section.Subtitle>
                <LabelFilters value={selectedLabels} labels={labels} onChange={setSelectedLabels} />
                {visibleProjects.length !== 0 ? <ProjectList projects={visibleProjects} /> : <EmptyMessage shownCount={totalTimesEmptyListWasShown} />}
            </Section>
        </Layout>
    );
};

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

export default Projects;
