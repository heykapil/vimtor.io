import Emoji from "../components/emoji";
import ProjectList from "../components/project-list";
import { useEffect, useMemo } from "react";
import { Project, Technology } from "../utils/types";
import { useCounter } from "react-use";
import { GetStaticProps } from "next";
import { getProjects, getTechnologies } from "../utils/data";
import SEO from "../components/seo";
import Section from "../components/section";
import TechnologyFilters from "../components/technology-filters";
import Link from "../components/link";
import { useRouter } from "next/router";

interface EmptyMessageProps {
    shownCount: number;
}

const EmptyMessage = ({ shownCount }: EmptyMessageProps) => {
    if (shownCount === 0) {
        return (
            <p className="text-xl py-8">
                Oops, seems like you want me to work a bit too much <Emoji label="flushed face" icon="😳" />
            </p>
        );
    }

    if (shownCount === 1) {
        return (
            <p className="text-xl py-8">
                I haven&apos;t build that yet <Emoji label="smiling face with sunglasses" icon="😎" />
            </p>
        );
    }

    if (shownCount === 2) {
        return (
            <p className="text-xl py-8">
                Are you that interested?
                <br />
                We can <Link href="/contact">build that together</Link>
            </p>
        );
    }

    if (shownCount === 3) {
        return (
            <p className="text-xl py-8">
                We can get married if you insist <Emoji label="wedding ring" icon="💍" />
            </p>
        );
    }

    if (shownCount === 4) {
        return <p className="text-xl py-8">I&apos;m sure you have better things to do...</p>;
    }

    return (
        <p className="text-xl py-8">
            I leave you with <Link href="https://www.youtube.com/watch?v=4dC_nRYIDZU">something interesting</Link> to watch.
            <br />
            Sayonara baby!
        </p>
    );
};

interface ProjectProps {
    projects: Array<Project>;
    technologies: Array<Technology>;
}

const Projects = ({ projects, technologies }: ProjectProps) => {
    const [totalTimesEmptyListWasShown, { inc: incrementTotalTimesEmptyListWasShown }] = useCounter(0);
    const { replace, query } = useRouter();

    const selectedTechnologies = useMemo(() => {
        if (Array.isArray(query.technologies)) {
            return query.technologies;
        }
        if (query.technologies) {
            return query.technologies.split(",");
        }
        return [];
    }, [query]);

    const visibleProjects = projects.filter((project) => {
        return selectedTechnologies.every((slug) => project.technologies.some((technology) => technology.fields.slug === slug));
    });

    useEffect(() => {
        if (visibleProjects.length === 0) {
            incrementTotalTimesEmptyListWasShown();
        }
    }, [visibleProjects.length, incrementTotalTimesEmptyListWasShown]);

    const updateSelectedLabels = async (technologies: Array<string>) => {
        if (technologies.length === 0) {
            await replace(`/projects`, undefined, { shallow: true });
        } else {
            await replace(`/projects?technologies=${encodeURIComponent(technologies.join(","))}`, undefined, { shallow: true });
        }
    };

    return (
        <>
            <SEO title="Projects" description="List of projects made by Victor Navarro" />
            <Section className="text-center mt-24 sm:mt-32">
                <Section.Title>
                    All my projects <Emoji label="rocket" icon="🚀" reset={false} animation="rocket" />
                </Section.Title>
                <Section.Subtitle>A list of projects I worked on that are worth mentioning</Section.Subtitle>
                <TechnologyFilters value={selectedTechnologies} onChange={updateSelectedLabels} options={technologies} />
                {visibleProjects.length !== 0 ? <ProjectList projects={visibleProjects} /> : <EmptyMessage shownCount={totalTimesEmptyListWasShown} />}
            </Section>
        </>
    );
};

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
    const projects = await getProjects();
    const technologies = await getTechnologies();
    return {
        props: {
            projects,
            technologies,
        },
    };
};

export default Projects;
