import Emoji from "./emoji";
import Link from "./link";
import Section from "./section/section";
import SectionTitle from "./section/section-title";
import SectionSubtitle from "./section/section-subtitle";
import SectionCTO from "./section/section-cta";

function AboutSection() {
    return (
        <Section className="opacity-0 motion-safe:animate-fade-in-down animation-delay-2000">
            <SectionTitle>
                About <Emoji label="potato" icon="🥔" />
            </SectionTitle>
            <SectionSubtitle>Here is what I&apos;m doing these days</SectionSubtitle>
            <div className="flex justify-center">
                <ul className="list-disc list-inside text-left m-0 text-base sm:text-xl leading-7">
                    <li>
                        Fullstack developer at <Link href="https://bloobirds.com/">Bloobirds</Link>
                    </li>
                    <li>
                        Teacher in fullstack at <Link href="https://nuclio.school/master-full-stack-developer/">Nuclio Digital School</Link>
                    </li>
                    <li>Doing freelance jobs from time to time</li>
                    <li>Always, always, always learning</li>
                </ul>
            </div>
            <SectionCTO>
                Feel free to check out my <Link href="/technologies">tech stack</Link>
                <br />
                to know what technologies I use everyday
            </SectionCTO>
        </Section>
    );
}

export default AboutSection;
