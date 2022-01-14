import { RichText } from "../lib/types";
import { config } from "../lib/sanity/client";
import { createPortableTextComponent } from "next-sanity";
import Link from "./link";

interface RichTextProps {
    content: RichText;
}

const PortableText = createPortableTextComponent({
    ...config,
    serializers: {
        marks: {
            link: (props: { mark: { href: string }; children: any }) => {
                return <Link href={props.mark.href}>{props.children}</Link>;
            },
        },
    },
});

export default function RichTextRenderer({ content }: RichTextProps) {
    return <PortableText blocks={content} />;
}
