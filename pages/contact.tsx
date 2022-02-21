import Page from "../components/page/page";
import Emoji from "../components/emoji";
import ContactForm from "../components/contact/contact-form";
import SectionCTA from "../components/section/section-cta";
import Link from "../components/link";
import PageTitle from "../components/page/page-title";
import PageSubtitle from "../components/page/page-subtitle";

export default function Contact() {
    return (
        <Page title="Contact" description="Send me an email so we can start a conversation">
            <PageTitle>
                Contact <Emoji label="call me hand" icon="🤙" />
            </PageTitle>
            <PageSubtitle>Get in touch! I don&apos;t bite...</PageSubtitle>
            <ContactForm />
            <SectionCTA>
                Contact me at <Link href="mailto:contact@vimtor.io">contact@vimtor.io</Link>
                <br />
                or reach out on social media <Emoji label="wink face" icon="😉" />
            </SectionCTA>
        </Page>
    );
}
