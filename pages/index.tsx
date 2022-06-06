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
import ExperienceSection from "../components/experience-section";

export default function Home({ projects }: HomePage) {
    return (
        <Page title="Home" description="Personal website of Victor Navarro for portfolio and contact" className="mt-8">
            <IntroSection />
            <FadeIn delay={1000}>
                <ExperienceSection projects={projects} />
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
