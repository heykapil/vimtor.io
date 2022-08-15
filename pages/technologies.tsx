import Page from "../components/page/page";
import Image from "next/image";
import Emoji from "../components/emoji";
import Link from "../components/link";
import PageTitle from "../components/page/page-title";
import PageSubtitle from "../components/page/page-subtitle";
import { GetStaticProps } from "next";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { TechnologiesPage } from "../lib/types";
import { getTechnologiesPage } from "../lib/sanity/api";

export default function Technologies({ levels }: TechnologiesPage) {
    const [showTooltip, setShowTooltip] = useState(true);

    return (
        <Page title="Technologies" description="See the technologies I used in the past">
            <PageTitle>
                Technologies <Emoji label="robot" icon="🤖" />
            </PageTitle>
            <PageSubtitle>These are the technologies I&apos;ve used over the years</PageSubtitle>
            <div className="space-y-20 max-w-3xl mx-auto">
                {levels.map((level, index) => (
                    <section key={level.name}>
                        <div className="px-6 md:text-center md:max-w-[40ch] mx-auto">
                            <h2 className="text-2xl font-bold mx-auto">{level.name}</h2>
                            <p className="text-lg leading-6 mt-1">{level.description}</p>
                        </div>
                        <ul
                            onScroll={() => setShowTooltip(false)}
                            className="relative flex flex-nowrap py-1 mt-6 md:mt-8 gap-8 overflow-x-scroll md:flex-wrap md:justify-center md:overflow-x-auto"
                        >
                            {level.technologies.map((technology) => (
                                <li className="shrink-0 hover:opacity-80 transition-opacity" key={technology.slug}>
                                    <Link href={`/projects?tags=${technology.slug}`}>
                                        <a title={`See projects using ${technology.name}`}>
                                            <Image
                                                src={technology.icon}
                                                alt={`${technology.name} icon`}
                                                width={96}
                                                height={96}
                                            />
                                        </a>
                                    </Link>
                                </li>
                            ))}
                            {index === 0 ? (
                                <Transition
                                    appear
                                    show={showTooltip}
                                    className="absolute w-[200vh] !m-0 bg-white/90 inset-0 h-full md:hidden"
                                    enter="transition-opacity duration-100"
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
                                        Swipe for more and click for seeing related projects
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

export const getStaticProps: GetStaticProps<TechnologiesPage> = async () => {
    return {
        revalidate: 3600,
        props: await getTechnologiesPage(),
    };
};
