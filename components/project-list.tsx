import Image from "next/image";
import { Project } from "../utils/types";
import ImageShadow from "./image-shadow";
import RichText from "./rich-text";
import Link from "./link";

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <ul className="sm:grid s:grid-flow-row sm:auto-rows-fr sm:justify-center sm:gap-12 sm:min-h-[256px] 3xl:mx-auto 3xl:my-0 3xl:grid-cols-projects">
            {projects.map((project) => (
                <li
                    key={project.title}
                    className="transition-all duration-100 ease-in mt-16 sm:flex sm:text-center sm:items-center sm:pl-5 sm:mt-0 md:px-5 md:max-w-[800px] md:min-h-[250px]"
                >
                    <div className="max-w-[90%] m-0 mx-auto w-full sm:w-1/2 sm:mr-8 md:mr-12 md:text-left">
                        <h3 className="mb-3 font-bold text-2xl sm:text-center md:text-left">{project.title}</h3>
                        <RichText>{project.content}</RichText>
                        <Link href={project.source} className="block mt-4">
                            {project.ctaMessage}
                        </Link>
                    </div>
                    <a
                        href={project.source}
                        className="block mt-9 transition-all w-full h-[256px] relative overflow-hidden rounded-0 focus:outline-none ring-gray-900 focus:ring-4 hover:ring-4 ring-opacity-80 sm:shrink-0 sm:w-1/2 sm:h-[250px] sm:mt-0 sm:rounded-tl-[16px] sm:rounded-bl-[16px] md:rounded-2xl"
                        aria-label={`${project.title} source`}
                    >
                        <Image
                            src={"https:" + project.banner.fields.file.url}
                            alt={project.title}
                            blurDataURL={project.blurredBanner}
                            placeholder="blur"
                            layout="fill"
                            objectFit="cover"
                        />
                        <ImageShadow className="sm:rounded-tl-[16px] sm:rounded-bl-[16px] md:rounded-2xl" />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ProjectList;
