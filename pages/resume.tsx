import Page from "../components/page/page";
import Emoji from "../components/emoji";
import SectionCTA from "../components/section/section-cta";
import PageTitle from "../components/page/page-title";
import PageSubtitle from "../components/page/page-subtitle";
import { Document, Page as Slide, View, Text } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import Link from "../components/link";
import { DownloadIcon } from "@heroicons/react/solid";
import { GetStaticProps } from "next";
import Button from "../components/button";
import SectionButtons from "../components/section/section-buttons";
import ResumeSection from "../components/resume-pdf/resume-section";
import ResumeSectionItem from "../components/resume-pdf/resume-section-item";
import { ResumePage } from "../lib/types";
import { getResumePage } from "../lib/sanity/api";

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

export default function Resume({ location, email, experience, education }: ResumePage) {
    const ResumeDocument = () => (
        <Document>
            <Slide size="A4" style={{ paddingVertical: 64, paddingHorizontal: 36 }}>
                <View style={{ marginBottom: 24, textAlign: "center" }}>
                    <Text style={{ fontSize: 24, marginBottom: 12 }}>Victor Navarro</Text>
                    <Text style={{ fontSize: 16 }}>
                        {location} {email}
                    </Text>
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

export const getStaticProps: GetStaticProps<ResumePage> = async () => {
    return {
        props: await getResumePage(),
    };
};
