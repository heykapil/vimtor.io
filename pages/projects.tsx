import Emoji from "../components/emoji";
import ProjectList from "../components/project-list";
import { useEffect, useMemo } from "react";
import { Project } from "../utils/types";
import { useCounter } from "react-use";
import { GetStaticProps } from "next";
import { getProjects } from "../utils/data";
import SEO from "../components/seo";
import Section from "../components/section";
import LabelFilters from "../components/label-filters";
import Link from "../components/link";
import { uniq } from "lodash";
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
                We can <Link href="/#contact">build that together</Link>
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
    projects: Project[];
    labels: string[];
}

const Projects = ({ projects, labels: allLabels }: ProjectProps) => {
    const [totalTimesEmptyListWasShown, { inc: incrementTotalTimesEmptyListWasShown }] = useCounter(0);
    const { replace, query } = useRouter();

    const selectedLabels = useMemo(() => {
        if (Array.isArray(query.labels)) {
            return query.labels;
        }
        if (query.labels) {
            return query.labels.split(",");
        }
        return [];
    }, [query]);

    const visibleProjects = projects.filter((project) => {
        return selectedLabels.every((label) => project.labels.includes(label));
    });

    useEffect(() => {
        if (visibleProjects.length === 0) {
            incrementTotalTimesEmptyListWasShown();
        }
    }, [visibleProjects.length, incrementTotalTimesEmptyListWasShown]);

    const updateSelectedLabels = async (labels: Array<string>) => {
        if (labels.length === 0) {
            await replace(`/projects`, undefined, { shallow: true });
        } else {
            await replace(`/projects?labels=${encodeURIComponent(labels.join(","))}`, undefined, { shallow: true });
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
                <LabelFilters value={selectedLabels} onChange={updateSelectedLabels} options={allLabels} />
                {visibleProjects.length !== 0 ? <ProjectList projects={visibleProjects} /> : <EmptyMessage shownCount={totalTimesEmptyListWasShown} />}
            </Section>
        </>
    );
};

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
    const projects = await getProjects();
    const labels = uniq(projects.flatMap((project) => project.labels));
    return {
        props: {
            projects,
            labels: labels,
        },
    };
};

export default Projects;
