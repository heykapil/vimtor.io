import { config, urlFor } from "../lib/sanity/client";
import { createPortableTextComponent } from "next-sanity";
import Link from "./link";
import Image from "next/image";
import { SanityImageAssetDocument } from "@sanity/client";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import ts from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript";
import sql from "react-syntax-highlighter/dist/cjs/languages/hljs/sql";
import theme from "react-syntax-highlighter/dist/cjs/styles/hljs/github-gist";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("sql", sql);

interface RichTextProps {
    content: any;
}

const PortableText = createPortableTextComponent({
    ...config,
    serializers: {
        types: {
            image: (image: { node: { asset: SanityImageAssetDocument } }) => {
                const url = urlFor(image.node.asset).url();
                if (!url) {
                    return null;
                }

                const { width, height } = image.node.asset.metadata.dimensions;
                return (
                    <div className="relative overflow-hidden rounded-none -mx-3 sm:rounded-md sm:-mx-4">
                        <Image src={url} alt="" width={width} height={height} layout="responsive" />
                    </div>
                );
            },
            code: (props: { node: { code: string; language: string } }) => {
                return (
                    <div className="bg-gray-50 px-2 py-2 relative border border-gray-100 shadow-sm -mx-3 sm:rounded-md sm:-mx-4 overflow-hidden">
                        <SyntaxHighlighter
                            style={theme}
                            language={props.node.language}
                            customStyle={{ background: "transparent", padding: 0, margin: 0, borderRadius: "0" }}
                            showLineNumbers
                            lineNumberStyle={{ opacity: 0.25 }}
                        >
                            {props.node.code}
                        </SyntaxHighlighter>
                    </div>
                );
            },
        },
        marks: {
            link: (props: { mark: { href: string }; children: any }) => {
                return <Link href={props.mark.href}>{props.children}</Link>;
            },
            code: (props: { children: any }) => {
                return (
                    <code className="rounded-md text-gray-800 mx-1 bg-gray-100 border border-gray-200 font-mono px-1.5 py-0.5">
                        {props.children}
                    </code>
                );
            },
        },
    },
});

export default function RichText({ content }: RichTextProps) {
    return <PortableText blocks={content} />;
}
