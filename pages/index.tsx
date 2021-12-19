import IntroSection from "../components/intro-section";
import AboutSection from "../components/about-section";
import ExperienceSection from "../components/experience-section";
import ContactSection from "../components/contact-section";
import { getProjects } from "../utils/data";
import { GetStaticProps } from "next";
import { Project } from "../utils/types";
import Layout from "../components/layout";

interface HomeProps {
    projects: Project[];
}

const Home = ({ projects }: HomeProps) => (
    <Layout title="Home" description="Personal website of Victor Navarro for portfolio and contact">
        <IntroSection />
        <AboutSection />
        <ExperienceSection projects={projects} />
        <ContactSection />
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjects({ limit: 8 });
    return {
        props: {
            projects,
        },
        revalidate: 10,
    };
};

export default Home;
