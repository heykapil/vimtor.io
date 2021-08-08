import { compiler } from "markdown-to-jsx";
import Link from "./link";

interface MarkdownProps {
    children: string;
}

const Markdown = ({ children }: MarkdownProps) => {
    return compiler(children, {
        overrides: {
            a: Link,
        },
    });
};

export default Markdown;
