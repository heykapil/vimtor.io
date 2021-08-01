import Emoji from "../components/emoji";
import Link from "next/link";
import ProjectList from "../components/project-list";
import { useEffect, useState } from "react";
import { Project } from "../utils/types";
import { useCounter, useSet } from "react-use";
import { GetStaticProps } from "next";
import { getProjects } from "../utils/markdown";
import Layout from "../components/layout";

const INTERESTING_URL = "https://www.youtube.com/watch?v=4dC_nRYIDZU";

const MESSAGES = [
    () => (
        <p>
            Oops, seems like you want me to work a bit too much <Emoji label="flushed face" icon="😳" />
        </p>
    ),
    () => (
        <p>
            I haven&apos;t build that yet <Emoji label="smiling face with sunglasses" icon="😎" />
        </p>
    ),
    () => (
        <p>
            Are you that interested?
            <br />
            We can <Link href="/#contact">build that together</Link>
        </p>
    ),
    () => (
        <p>
            We can get married if you insist <Emoji label="wedding ring" icon="💍" />
        </p>
    ),
    () => <p>I&apos;m sure you have better things to do...</p>,
    () => (
        <p>
            I leave you with something interesting to watch.
            <br />
            Sayonara baby!
        </p>
    ),
];

interface EmptyMessageProps {
    shownCount: number;
}

const EmptyMessage = ({ shownCount }: EmptyMessageProps) => {
    const Component = MESSAGES[shownCount % MESSAGES.length];
    return <Component />;
};

interface ProjectProps {
    allProjects: Project[];
    labels: string[];
}

const Projects = ({ allProjects, labels }: ProjectProps) => {
    const [emptyMessageIndex, { inc: incrementMessageIndex }] = useCounter(0);
    const [selectedLabels, { toggle: selectLabel }] = useSet();
    const [projects, setProjects] = useState(allProjects);

    useEffect(() => {
        const filteredProjects = allProjects.filter((project) => {
            // @ts-ignore
            return [...selectedLabels].every((label) => project.labels.includes(label));
        });
        if (filteredProjects.length === 0) {
            incrementMessageIndex();
        }
        setProjects(filteredProjects);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLabels]);

    useEffect(() => {
        if (emptyMessageIndex === MESSAGES.length - 1) {
            setTimeout(() => window.open(INTERESTING_URL), 3000);
        }
    }, [emptyMessageIndex]);

    return (
        <Layout title="Projects by Victor Navarro" description="List of projects made by Victor Navarro">
            <header className="mb-16">
                <div>
                    <h1 className="text-center text-3xl font-bold sm:text-4xl">
                        All my projects <Emoji label="rocket" icon="🚀" />
                    </h1>
                    <p className="text-center text-base py-0 px-8 sm:text-lg">A list of projects I worked on that are worth mentioning</p>
                </div>
                <ul
                    className="scroll-shadow flex max-w-[90%] mt-8 mb-0 mx-auto overflow-x-auto sm:overflow-x-hidden relative sm:flex-wrap justify-center xl:max-w-[55%]"
                    aria-label="projects filter"
                    role="menu"
                >
                    {labels.map((label) => (
                        <li
                            key={label}
                            onClick={() => selectLabel(label)}
                            role="menuitemcheckbox"
                            tabIndex={0}
                            className={`capitalize border border-gray-400 rounded-full py-2 px-4 cursor-pointer mr-4 flex-shrink-0 select-none transition-all duration-100 ease-in outline-none hover:bg-gray-100 focus:bg-gray-100 mb-4 ${
                                selectedLabels.has(label) ? "border-gray-900 bg-gray-900 text-gray-100 hover:bg-gray-900 focus:bg-gray-900" : ""
                            }`}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </header>
            {projects.length !== 0 ? <ProjectList projects={projects} /> : <EmptyMessage shownCount={emptyMessageIndex} />}
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
    const projects = await getProjects();
    // @ts-ignore
    const labels = [...new Set(projects.flatMap((project) => project.labels))];
    return {
        props: {
            allProjects: projects,
            labels,
        },
    };
};

export default Projects;
