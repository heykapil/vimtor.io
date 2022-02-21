import IntroSection from "../components/intro-section";
import AboutSection from "../components/about-section";
import ContactSection from "../components/contact/contact-section";
import Page from "../components/page/page";
import SectionTitle from "../components/section/section-title";
import Emoji from "../components/emoji";
import SectionSubtitle from "../components/section/section-subtitle";
import ProjectList from "../components/projects/project-list";
import ProjectItem from "../components/projects/project-item";
import SectionCTO from "../components/section/section-cta";
import Link from "next/link";
import Section from "../components/section/section";
import { GetStaticProps } from "next";
import { getHomePage } from "../lib/sanity/api";
import { HomePage } from "../lib/types";
import FadeIn from "../components/fade-in";

export default function Home({ projects }: HomePage) {
    return (
        <Page title="Home" description="Personal website of Victor Navarro for portfolio and contact" className="mt-8">
            <IntroSection />
            <FadeIn delay={3500}>
                <AboutSection />
            </FadeIn>
            <FadeIn delay={4000}>
                <Section>
                    <SectionTitle>
                        Experience <Emoji label="rocket" icon="🚀" animation="rocket" reset={false} />
                    </SectionTitle>
                    <SectionSubtitle>Some of the things I&apos;ve built</SectionSubtitle>
                    <ProjectList>
                        {projects.map((project) => (
                            <ProjectItem key={project.name} {...project} />
                        ))}
                    </ProjectList>
                    <SectionCTO>
                        Feel free to see{" "}
                        <Link href="/projects">
                            <a className="transiton duration-200 ease-in-out text-gray-400 inline-block underline hover:text-gray-800 cursor-pointer">
                                all of my projects
                            </a>
                        </Link>
                    </SectionCTO>
                </Section>
            </FadeIn>
            <ContactSection />
        </Page>
    );
}

export const getStaticProps: GetStaticProps<HomePage> = async () => {
    return {
        revalidate: 3600,
        props: await getHomePage(),
    };
};
