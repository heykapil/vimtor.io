import Emoji from "./emoji";
import Link from "./link";

interface EmptyMessageProps {
    shownCount: number;
}

const EmptyMessage = ({ shownCount }: EmptyMessageProps) => {
    if (shownCount === 0) {
        return (
            <p className="text-xl py-8">
                Oops, seems like you want me to work a bit too much <Emoji label="flushed face" icon="😳" />
            </p>
        );
    }

    if (shownCount === 1) {
        return (
            <p className="text-xl py-8">
                I haven&apos;t build that yet <Emoji label="smiling face with sunglasses" icon="😎" />
            </p>
        );
    }

    if (shownCount === 2) {
        return (
            <p className="text-xl py-8">
                Are you that interested?
                <br />
                We can <Link href="/contact">build that together</Link>
            </p>
        );
    }

    if (shownCount === 3) {
        return (
            <p className="text-xl py-8">
                We can get married if you insist <Emoji label="wedding ring" icon="💍" />
            </p>
        );
    }

    if (shownCount === 4) {
        return <p className="text-xl py-8">I&apos;m sure you have better things to do...</p>;
    }

    return (
        <p className="text-xl py-8">
            I leave you with <Link href="https://www.youtube.com/watch?v=4dC_nRYIDZU">something interesting</Link> to watch.
            <br />
            Sayonara baby!
        </p>
    );
};

export default EmptyMessage;
