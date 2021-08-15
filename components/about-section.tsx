import Emoji from "./emoji";
import Link from "./link";
import Section from "./section";

const AboutSection = () => {
    return (
        <Section className="opacity-0 animate-fade-in-down animation-delay-2000 text-center mt-24 sm:mt-32">
            <Section.Title>
                About <Emoji label="potato" icon="🥔" />
            </Section.Title>
            <Section.Subtitle>Here is what I&apos;m doing these days</Section.Subtitle>
            <div className="flex justify-center">
                <ul className="list-disc list-inside text-left m-0 text-base sm:text-xl leading-7">
                    <li>
                        Fullstack developer at{" "}
                        <Link href="https://bloobirds.com/">Bloobirds</Link>
                    </li>
                    <li>
                        Teacher in fullstack at{" "}
                        <Link href="https://nuclio.school/master-full-stack-developer/">Nuclio Digital School</Link>
                    </li>
                    <li>Doing freelance jobs from time to time</li>
                    <li>Always learning</li>
                </ul>
            </div>
            <Section.CTO>
                If you are interested in my tech stack,
                <br />
                you can check it out on{" "}
                <Link href="https://stackshare.io/vimtor/my-stack">stackshare.io</Link>
            </Section.CTO>
        </Section>
    );
};

export default AboutSection;
