import IntroSection from "../components/intro-section";
import AboutSection from "../components/about-section";
import ExperienceSection from "../components/experience-section";
import ContactSection from "../components/contact/contact-section";
import { getProjects } from "../utils/data";
import { GetStaticProps } from "next";
import { Project } from "../utils/types";
import Page from "../components/page/page";

interface HomeProps {
    projects: Project[];
}

export default function Home({ projects }: HomeProps) {
    return (
        <Page title="Home" description="Personal website of Victor Navarro for portfolio and contact">
            <IntroSection />
            <AboutSection />
            <ExperienceSection projects={projects} />
            <ContactSection />
        </Page>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjects({ limit: 8 });
    return {
        props: {
            projects,
        },
        revalidate: 10,
    };
};
