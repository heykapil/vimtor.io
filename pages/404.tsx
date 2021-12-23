import Emoji from "../components/emoji";
import Link from "../components/link";
import Page from "../components/page/page";
import PageTitle from "../components/page/page-title";
import PageSubtitle from "../components/page/page-subtitle";

export default function Custom404() {
    return (
        <Page title="404" className="min-h-[45vh] flex flex-col items-center justify-center">
            <PageTitle>
                Page not found <Emoji label="magnifying glass" icon="🔍" />
            </PageTitle>
            <PageSubtitle>
                This page doesn&apos;t exist, but I can <Link href="/">help you go home</Link>
            </PageSubtitle>
        </Page>
    );
}
