import IntroSection from "../components/intro-section";
import AboutSection from "../components/about-section";
import ContactSection from "../components/contact/contact-section";
import Page from "../components/page/page";
import graphCms from "../utils/graph-cms";
import SectionTitle from "../components/section/section-title";
import Emoji from "../components/emoji";
import SectionSubtitle from "../components/section/section-subtitle";
import ProjectList from "../components/projects/project-list";
import ProjectItem from "../components/projects/project-item";
import SectionCTO from "../components/section/section-cta";
import Link from "next/link";
import Section from "../components/section/section";
import { GetStaticProps } from "next";
import { ProjectSummaryFragment } from "../utils/schema";

interface HomeProps {
    projects: Array<ProjectSummaryFragment>;
}

export default function Home({ projects }: HomeProps) {
    return (
        <Page title="Home" description="Personal website of Victor Navarro for portfolio and contact" className="mt-8">
            <IntroSection />
            <AboutSection />
            <Section className="opacity-0 motion-safe:animate-fade-in-down animation-delay-3000">
                <SectionTitle>
                    Experience <Emoji label="rocket" icon="🚀" animation="rocket" reset={false} />
                </SectionTitle>
                <SectionSubtitle>Some of the things I&apos;ve built</SectionSubtitle>
                <ProjectList>
                    {projects.map((project) => (
                        <ProjectItem key={project.slug} {...project} />
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
            <ContactSection />
        </Page>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const { page } = await graphCms.getHomePage();

    if (!page) {
        return {
            notFound: true,
        };
    }

    return {
        revalidate: 3600,
        props: {
            projects: page.projects,
        },
    };
};
