import Section from "../components/section";
import Emoji from "../components/emoji";
import SEO from "../components/seo";
import Link from "../components/link";

export default function Custom404() {
    return (
        <>
            <SEO title="404" />
            <div className="h-[65vh] flex items-center justify-center">
                <div className="text-center">
                    <Section.Title>
                        Page not found <Emoji label="magnifying glass" icon="🔍" />
                    </Section.Title>
                    <Section.Subtitle className="!mb-0">
                        This page doesn&apos;t exist, but I can <Link href="/">help you go home</Link>
                    </Section.Subtitle>
                </div>
            </div>
        </>
    );
}
