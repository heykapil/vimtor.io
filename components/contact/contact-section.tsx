import Emoji from "../emoji";
import Section from "../section/section";
import Link from "../link";
import ContactForm from "./contact-form";
import SectionTitle from "../section/section-title";
import SectionSubtitle from "../section/section-subtitle";
import SectionCTA from "../section/section-cta";

function ContactSection() {
    return (
        <Section>
            <SectionTitle>
                Contact <Emoji label="call me hand" icon="🤙" />
            </SectionTitle>
            <SectionSubtitle>Get in touch! I don&apos;t bite...</SectionSubtitle>
            <ContactForm />
            <SectionCTA>
                Contact me at <Link href="mailto:contact@vimtor.io">contact@vimtor.io</Link>
                <br />
                or reach out on social media <Emoji label="wink face" icon="😉" />
            </SectionCTA>
        </Section>
    );
}

export default ContactSection;
