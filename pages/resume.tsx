import Page from "../components/page/page";
import Emoji from "../components/emoji";
import SectionCTA from "../components/section/section-cta";
import PageTitle from "../components/page/page-title";
import PageSubtitle from "../components/page/page-subtitle";
import dynamic from "next/dynamic";
import Link from "../components/link";
import { DownloadIcon } from "@heroicons/react/solid";
import { GetStaticProps } from "next";
import Button from "../components/button";
import SectionButtons from "../components/section/section-buttons";
import { ResumePage } from "../lib/types";
import { getResumePage } from "../lib/sanity/api";
import ResumeDocument from "../components/resume-document";

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

export default function Resume(props: ResumePage) {
    return (
        <Page title="Resume" description="Send me an email so we can start a conversation">
            <PageTitle>
                Resume <Emoji label="paper document" icon="📄" />
            </PageTitle>
            <PageSubtitle>Here&apos;s my resume for the good old days</PageSubtitle>
            <PDFButtons document={<ResumeDocument {...props} />} fileName="Victor Navarro Resume" />
            <SectionCTA className="text-center">
                The file is generated from this website contents
                <br />
                Learn how it&apos;s done{" "}
                <Link href="https://github.com/vimtor/vimtor.io/blob/main/pages/resume.tsx">here</Link>
            </SectionCTA>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<ResumePage> = async () => {
    return {
        props: await getResumePage(),
    };
};
