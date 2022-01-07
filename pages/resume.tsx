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
import Button from "../components/button";
import SectionButtons from "../components/section/section-buttons";
import ResumeSection from "../components/resume-pdf/resume-section";
import ResumeSectionItem from "../components/resume-pdf/resume-section-item";

// This is needed so @react-pdf/renderer does not explode
const PDFButtons = dynamic(() => import("../components/pdf-buttons"), {
    ssr: false,
    loading: () => (
        <SectionButtons>
            <Button variant="primary" size="medium" className="w-full sm:w-auto">
                <DownloadIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Download
            </Button>
            <Button variant="secondary" size="medium" className="w-full sm:w-auto">
                View PDF
            </Button>
        </SectionButtons>
    ),
});
StyleSheet.create({
    header: {
        marginBottom: 16,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        textAlign: "center",
    },
    page: {
        padding: 24,
    },
    section: {
        marginTop: 8,
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: 14,
    },
    itemRight: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        color: "#8d8d8d",
    },
});

interface ResumeProps {
    projects: Array<ProjectSummaryFragment>;
}

export default function Resume({ projects }: ResumeProps) {
    const ResumeDocument = () => (
        <Document>
            <Slide size="A4" style={{ paddingVertical: 64, paddingHorizontal: 36 }}>
                <View style={{ marginBottom: 24, textAlign: "center" }}>
                    <Text style={{ fontSize: 24, marginBottom: 12 }}>Victor Navarro</Text>
                    <Text style={{ fontSize: 16 }}>22 years | Website | victor@vimtor.io | GitHub</Text>
                </View>
                <ResumeSection title="Experience">
                    <ResumeSectionItem
                        title="Computer Science"
                        subtitle="Universitat Pompeu Fabra"
                        startDate={new Date(2021, 1)}
                        endDate={new Date(2022, 7)}
                        accessoryTitle="Barcelona"
                    />
                </ResumeSection>
            </Slide>
        </Document>
    );

    return (
        <Page title="Resume" description="Send me an email so we can start a conversation">
            <PageTitle>
                Resume <Emoji label="paper document" icon="📄" />
            </PageTitle>
            <PageSubtitle>Here&apos;s my resume for the good old days</PageSubtitle>
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
