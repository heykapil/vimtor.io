import Emoji from "../components/emoji";
import Page from "../components/page/page";
import PageTitle from "../components/page/page-title";
import PageSubtitle from "../components/page/page-subtitle";
import { GetStaticProps } from "next";
import { PrivacyPolicy } from "../lib/types";
import { getPrivacyPolicy } from "../lib/sanity/api";
import RichText from "../components/rich-text";

export default function PrivacyPolicyPage({ content }: PrivacyPolicy) {
    return (
        <Page title="Privacy Policy" description="Privacy policy">
            <PageTitle>
                Privacy Policy <Emoji label="lock" icon="🔒" />
            </PageTitle>
            <PageSubtitle>How I use and share your personal information</PageSubtitle>
            <section className="max-w-prose px-4 mx-auto prose mb-32">
                <RichText content={content} />
            </section>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<PrivacyPolicy> = async () => {
    return {
        revalidate: 3600,
        props: await getPrivacyPolicy(),
    };
};
