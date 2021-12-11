import SEO from "../components/seo";
import IntroSection from "../components/intro-section";
import AboutSection from "../components/about-section";
import ExperienceSection from "../components/experience-section";
import ContactSection from "../components/contact-section";
import { getProjects } from "../utils/data";
import { GetStaticProps } from "next";
import { Project } from "../utils/types";

const Contact = () => (
    <>
        <SEO title="Contact" description="Send me an email so we can start a conversation" />
        <ContactSection />
    </>
);

export default Contact;
