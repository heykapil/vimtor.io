import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import Link from "./link";

interface RichTextProps {
    children: Document;
}

const options: Options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="empty:mt-4">{children}</p>,
        [INLINES.HYPERLINK]: (node, children) => <Link href={node.data.uri}>{children}</Link>,
    },
};

function RichText({ children }: RichTextProps) {
    return <div>{documentToReactComponents(children, options)}</div>;
}

export default RichText;
