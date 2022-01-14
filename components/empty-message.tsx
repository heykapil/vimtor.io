import Emoji from "./emoji";
import Link from "./link";
import { ComponentPropsWithoutRef } from "react";
import { classNames } from "../lib/style";

interface EmptyMessageProps {
    shownCount: number;
}

function Message({ className, ...props }: ComponentPropsWithoutRef<"p">) {
    return <p className={classNames("text-2xl pt-8 pb-32 text-center")} {...props} />;
}

function EmptyMessage({ shownCount }: EmptyMessageProps) {
    if (shownCount === 0) {
        return (
            <Message>
                Oops, seems like you want me to work a bit too much <Emoji label="flushed face" icon="😳" />
            </Message>
        );
    }

    if (shownCount === 1) {
        return (
            <Message>
                I haven&apos;t build that yet <Emoji label="smiling face with sunglasses" icon="😎" />
            </Message>
        );
    }

    if (shownCount === 2) {
        return (
            <Message>
                Are you that interested?
                <br />
                We can <Link href="/contact">build that together</Link>
            </Message>
        );
    }

    if (shownCount === 3) {
        return (
            <Message>
                We can get married if you insist <Emoji label="wedding ring" icon="💍" />
            </Message>
        );
    }

    if (shownCount === 4) {
        return <Message>I&apos;m sure you have better things to do...</Message>;
    }

    return (
        <Message>
            I leave you with <Link href="https://www.youtube.com/watch?v=4dC_nRYIDZU">something interesting</Link> to watch.
            <br />
            Sayonara baby!
        </Message>
    );
}

export default EmptyMessage;
