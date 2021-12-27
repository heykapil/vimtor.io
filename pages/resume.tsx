import Page from "../components/page/page";
import Emoji from "../components/emoji";
import SectionCTA from "../components/section/section-cta";
import PageTitle from "../components/page/page-title";
import PageSubtitle from "../components/page/page-subtitle";
import { Document, Page as Slide, StyleSheet, Text, View } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import graphCms from "../utils/graph-cms";
import Link from "../components/link";
import { DownloadIcon } from "@heroicons/react/solid";
import { GetStaticProps } from "next";
import { ProjectSummaryFragment } from "../utils/schema";

// This is needed so @react-pdf/renderer does not explode
const PDFButtons = dynamic(() => import("../components/pdf-buttons"), {
    ssr: false,
    loading: () => (
        <div className="sm:flex max-w-[50vh] px-4 sm:max-w-none sm:gap-3 mx-auto space-y-3 sm:space-y-0 justify-center items-center">
            <button className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-2 border-transparent shadow-sm text-lg font-medium rounded-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                <DownloadIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Download
            </button>
            <button className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-2 border-gray-800 shadow-sm text-lg font-medium rounded-full text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                View PDF
            </button>
        </div>
    ),
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

interface ResumeProps {
    projects: Array<ProjectSummaryFragment>;
}

export default function Resume({ projects }: ResumeProps) {
    const ResumeDocument = () => (
        <Document>
            <Slide size="A4" style={styles.page}>
                {projects?.map((project) => (
                    <View key={project.slug} style={styles.section}>
                        <Text>{project.name}</Text>
                    </View>
                ))}
            </Slide>
        </Document>
    );

    return (
        <Page title="Resume" description="Send me an email so we can start a conversation">
            <PageTitle>
                Resume <Emoji label="paper document" icon="📄" />
            </PageTitle>
            <PageSubtitle>Here&apos;s my resume on PDF in case you are one of those</PageSubtitle>
            <PDFButtons document={<ResumeDocument />} fileName="Victor Navarro Resume" />
            <SectionCTA className="text-center">
                The file is generated from this website contents
                <br />
                Learn how it&apos;s done <Link href="https://github.com/vimtor/vimtor.io/blob/main/pages/resume.tsx">here</Link>
            </SectionCTA>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<ResumeProps> = async () => {
    const { projects } = await graphCms.getProjectsPage();
    return {
        props: {
            projects,
        },
    };
};
