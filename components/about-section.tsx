import Emoji from "./emoji";
import Link from "./link";
import Section from "./section/section";
import SectionTitle from "./section/section-title";
import SectionSubtitle from "./section/section-subtitle";
import SectionCTO from "./section/section-cta";

function AboutSection() {
    return (
        <Section>
            <SectionTitle>
                About <Emoji label="potato" icon="🥔" />
            </SectionTitle>
            <SectionSubtitle>Here&apos;s what I&apos;m doing these days</SectionSubtitle>
            <div className="flex justify-center">
                <ul className="list-disc list-inside text-left m-0 text-base sm:text-xl leading-7">
                    <li>
                        Fullstack developer at <Link href="https://bloobirds.com/">Bloobirds</Link>
                    </li>
                    <li>
                        Bootcamp teacher at{" "}
                        <Link href="https://nuclio.school/master-full-stack-developer/">Nuclio Digital School</Link>
                    </li>
                    <li>Freelancing with interesting clients</li>
                    <li>Always, always, always learning</li>
                </ul>
            </div>
            <SectionCTO>
                Check out my <Link href="/technologies">tech stack</Link> to know what technologies I use everyday
            </SectionCTO>
        </Section>
    );
}

export default AboutSection;
