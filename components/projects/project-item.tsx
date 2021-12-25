import Link from "../link";
import GitHubIcon from "../github-icon";
import Image from "next/image";
import ImageShadow from "../image-shadow";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { ProjectSummaryFragment } from "../../utils/schema";

function ProjectItem({ name, image, summary, demoUrl, ctaMessage, gitHubUrl }: ProjectSummaryFragment) {
    return (
        <li className="transition-all duration-100 ease-in mt-16 sm:flex sm:items-center sm:pl-5 sm:mt-0 md:px-5 md:max-w-[800px] md:min-h-[250px]">
            <div className="max-w-[90%] m-0 mx-auto w-full sm:w-1/2 sm:mr-8 sm:text-left md:mr-12">
                <h3 className="mb-3 font-bold text-2xl">{name}</h3>
                <RichText renderers={{ a: Link }} content={summary.raw} />
                <div className="flex justify-center items-center mt-4 space-x-3 sm:justify-start">
                    <Link href={demoUrl}>{ctaMessage}</Link>
                    {gitHubUrl ? (
                        <Link href={gitHubUrl}>
                            <GitHubIcon className="w-7 h-7 hover:text-gray-600 mb-0.5" />
                        </Link>
                    ) : null}
                </div>
            </div>
            <a
                href={demoUrl}
                className="block mt-9 transition-all w-full h-[256px] relative overflow-hidden rounded-0 focus:outline-none ring-gray-900 focus:ring-4 hover:ring-4 ring-opacity-80 sm:shrink-0 sm:w-1/2 sm:h-[250px] sm:mt-0 sm:rounded-tl-[16px] sm:rounded-bl-[16px] md:rounded-2xl"
                aria-label={`${name} source`}
            >
                <Image src={image.url} alt={name} layout="fill" objectFit="cover" />
                <ImageShadow className="sm:rounded-tl-[16px] sm:rounded-bl-[16px] md:rounded-2xl" />
            </a>
        </li>
    );
}

export default ProjectItem;