import Page from "../components/page/page";
import SectionTitle from "../components/section/section-title";
import Emoji from "../components/emoji";
import SectionSubtitle from "../components/section/section-subtitle";
import ProjectList from "../components/project-list";
import SectionCTO from "../components/section/section-cta";
import Link from "next/link";
import Section from "../components/section/section";
import { GetStaticProps } from "next";
import { getHomePage } from "../lib/sanity/api";
import { HomePage } from "../lib/types";
import { motion } from "framer-motion";
import ProfilePicture from "../components/profile-picture";
import ContactForm from "../components/contact/contact-form";
import SectionCTA from "../components/section/section-cta";

export default function Home({ projects }: HomePage) {
    return (
        <Page title="Home" description="Personal website of Victor Navarro for portfolio and contact" className="mt-8">
            <header className="sm:px-4 text-center sm:mt-0 sm:text-left sm:w-full sm:flex sm:justify-center sm:items-center">
                <ProfilePicture />
                <div className="px-3 max-w-sm md:max-w-xl m-8 mx-auto sm:mx-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="mt-5 mb-2 text-3xl sm:text-4xl font-extrabold sm:mt-0"
                    >
                        Covadonga <Emoji appear label="hello" icon="👋" delay={300} />
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="text-xl"
                    >
                        <p>Hi, I am Victor Navarro!</p>
                        <p>When I was a child, my dream was to become an inventor</p>
                        <p className="mt-5">Today, I help quality businesses build quality software</p>
                    </motion.div>
                </div>
            </header>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
            >
                <Section>
                    <SectionTitle>
                        Experience <Emoji label="rocket" icon="🚀" animation="rocket" reset={false} />
                    </SectionTitle>
                    <SectionSubtitle>Some of the things I&apos;ve built</SectionSubtitle>
                    <ProjectList projects={projects} />
                    <SectionCTO>
                        Feel free to see <Link href="/projects">all of my projects</Link>
                    </SectionCTO>
                </Section>
            </motion.div>
            <Section>
                <SectionTitle>
                    Contact <Emoji label="call me hand" icon="🤙" />
                </SectionTitle>
                <SectionSubtitle>Get in touch! I don&apos;t bite...</SectionSubtitle>
                <ContactForm />
                <SectionCTA>
                    Contact me at <Link href="mailto:hello@vimtor.io">hello@vimtor.io</Link>
                    <br />
                    or reach out on social media <Emoji label="wink face" icon="😉" />
                </SectionCTA>
            </Section>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<HomePage> = async () => {
    return {
        revalidate: 3600,
        props: await getHomePage(),
    };
};
