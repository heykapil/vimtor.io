import Section from "../components/section";
import Emoji from "../components/emoji";
import Link from "../components/link";
import Layout from "../components/layout";

export default function Custom404() {
    return (
        <Layout title="404" className="flex items-center justify-center text-center">
            <div>
                <Section.Title>
                    Page not found <Emoji label="magnifying glass" icon="🔍" />
                </Section.Title>
                <Section.Subtitle className="!mb-0">
                    This page doesn&apos;t exist, but I can <Link href="/">help you go home</Link>
                </Section.Subtitle>
            </div>
        </Layout>
    );
}
