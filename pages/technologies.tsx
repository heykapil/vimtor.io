import Page from "../components/page/page";
import Image from "next/image";
import Emoji from "../components/emoji";
import Link from "../components/link";
import PageTitle from "../components/page/page-title";
import PageSubtitle from "../components/page/page-subtitle";
import { GetStaticProps } from "next";
import graphCms from "../utils/graph-cms";
import { GetTechnologiesPageQuery } from "../utils/schema";
import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function Technologies({ page }: GetTechnologiesPageQuery) {
    const [showTooltip, setShowTooltip] = useState(true);

    if (!page) {
        return null;
    }

    return (
        <Page title="Technologies" description="See the technologies I used in the past">
            <PageTitle>
                Technologies <Emoji label="robot" icon="🤖" />
            </PageTitle>
            <PageSubtitle>These are the technologies I&apos;ve used over the years</PageSubtitle>
            <div className="space-y-12 max-w-4xl mx-auto">
                {page.levels.map((level, index) => (
                    <section key={level.name}>
                        <div className="px-6 md:text-center md:max-w-[40ch] mx-auto">
                            <h2 className="text-2xl font-bold mx-auto">{level.name}</h2>
                            <p className="text-lg leading-6 mt-1">{level.description}</p>
                        </div>
                        <ul
                            onScroll={() => setShowTooltip(false)}
                            className="relative flex flex-nowrap mt-4 md:mt-8 gap-8 overflow-x-scroll md:flex-wrap md:justify-center"
                        >
                            {level.technologies.map((technology) => (
                                <li className="shrink-0 hover:opacity-80 transition-opacity" key={technology.slug}>
                                    <Link href={`/projects?labels=${encodeURIComponent(technology.slug)}`}>
                                        <a title={`See projects using ${technology.name}`}>
                                            <Image src={technology.icon.url} alt={`${technology.name} icon`} width={128} height={128} />
                                        </a>
                                    </Link>
                                </li>
                            ))}
                            {index === 0 ? (
                                <Transition
                                    appear
                                    show={showTooltip}
                                    className="absolute w-[200vh] !m-0 bg-white/90 inset-0 h-full md:hidden"
                                    enter="transition-opacity delay-1000 duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <span
                                        role="tooltip"
                                        aria-hidden="false"
                                        className="absolute px-24 inset-0 h-full flex justify-center items-center pb-4 w-screen text-center text-gray-400 italic"
                                    >
                                        Scroll for more and click for seeing related projects
                                    </span>
                                </Transition>
                            ) : null}
                        </ul>
                    </section>
                ))}
            </div>
        </Page>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await graphCms.getTechnologiesPage();
    return {
        props: response,
        revalidate: 10,
    };
};
