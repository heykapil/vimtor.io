import { Project } from "../lib/types";
import { motion } from "framer-motion";
import RichTextRenderer from "./rich-text-renderer";
import Link from "./link";
import GitHubIcon from "./github-icon";
import Image from "next/image";
import { urlFor } from "../lib/sanity/client";
import ImageShadow from "./image-shadow";

interface ProjectListProps {
    projects: Project[];
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

function ProjectList({ projects }: ProjectListProps) {
    return (
        <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="sm:grid sm:grid-flow-row sm:auto-rows-fr sm:justify-center sm:gap-12 sm:min-h-[256px] 3xl:mx-auto 3xl:my-0 3xl:grid-cols-projects"
        >
            {projects.map((project) => (
                <motion.li
                    key={project.name}
                    variants={item}
                    className="mt-16 sm:flex sm:items-center sm:pl-5 sm:mt-0 md:px-5 md:max-w-[800px] md:min-h-[250px]"
                >
                    <div className="max-w-[90%] m-0 mx-auto w-full text-center sm:w-1/2 sm:mr-8 sm:text-left md:mr-12">
                        <h3 className="mb-3 font-bold text-2xl">{project.name}</h3>
                        <RichTextRenderer content={project.summary} />
                        <div className="flex justify-center items-center mt-4 space-x-3 sm:justify-start">
                            <Link href={project.demoUrl}>{project.ctaMessage}</Link>
                            {project.gitHubRepositoryUrl ? (
                                <Link title="See repository on GitHub" href={project.gitHubRepositoryUrl}>
                                    <GitHubIcon className="w-7 h-7 hover:text-gray-600 mb-0.5" />
                                </Link>
                            ) : null}
                        </div>
                    </div>
                    <a
                        href={project.demoUrl}
                        className="block mt-9 transition-all w-full h-[256px] relative overflow-hidden rounded-0 focus:outline-none ring-gray-900 focus:ring-4 hover:ring-4 ring-opacity-80 sm:shrink-0 sm:w-1/2 sm:h-[250px] sm:mt-0 sm:rounded-tl-[16px] sm:rounded-bl-[16px] md:rounded-2xl"
                        aria-label={`${project.name} source`}
                    >
                        <Image
                            src={urlFor(project.banner).width(1000).quality(100).url() as string}
                            alt={project.name}
                            layout="fill"
                            objectFit="cover"
                        />
                        <ImageShadow className="sm:rounded-tl-[16px] sm:rounded-bl-[16px] md:rounded-2xl" />
                    </a>
                </motion.li>
            ))}
        </motion.ul>
    );
}

export default ProjectList;
