import Emoji from "../components/emoji";
import ProjectList from "../components/project-list";
import { useEffect } from "react";
import { Project, ProjectType, Technology } from "../utils/types";
import { useCounter } from "react-use";
import { GetStaticProps } from "next";
import { getProjects, getProjectTypes, getTechnologies } from "../utils/data";
import SEO from "../components/seo";
import Section from "../components/section";
import TechnologyFilters from "../components/technology-filters";
import EmptyMessage from "../components/empty-message";
import { useQueryArrayState } from "../hooks/use-query-state";

interface ProjectProps {
    projects: Array<Project>;
    technologies: Array<Technology>;
    projectTypes: Array<ProjectType>;
}

const Projects = ({ projects, technologies }: ProjectProps) => {
    const [totalTimesEmptyListWasShown, { inc: incrementTotalTimesEmptyListWasShown }] = useCounter(0);
    const [selectedTechnologies, setSelectedTechnologies] = useQueryArrayState("technology");

    const visibleProjects = projects.filter((project) => {
        return selectedTechnologies.every((slug) => project.technologies.some((technology) => technology.fields.slug === slug));
    });

    useEffect(() => {
        if (visibleProjects.length === 0) {
            incrementTotalTimesEmptyListWasShown();
        }
    }, [visibleProjects.length, incrementTotalTimesEmptyListWasShown]);

    return (
        <>
            <SEO title="Projects" description="List of projects made by Victor Navarro" />
            <Section className="text-center mt-24 sm:mt-32">
                <Section.Title>
                    All my projects <Emoji label="rocket" icon="🚀" reset={false} animation="rocket" />
                </Section.Title>
                <Section.Subtitle>A list of projects I worked on that are worth mentioning</Section.Subtitle>
                <TechnologyFilters value={selectedTechnologies} technologies={technologies} onChange={setSelectedTechnologies} />
                {visibleProjects.length !== 0 ? <ProjectList projects={visibleProjects} /> : <EmptyMessage shownCount={totalTimesEmptyListWasShown} />}
            </Section>
        </>
    );
};

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
    const projects = await getProjects();
    const technologies = await getTechnologies();
    const projectTypes = await getProjectTypes();
    return {
        props: {
            projects,
            technologies,
            projectTypes,
        },
    };
};

export default Projects;
