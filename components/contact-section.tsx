import Emoji from "./emoji";
import Section from "./section";
import { useEffect, useState } from "react";
import Link from "./link";
import { useForm } from "@formspree/react";
import { classNames } from "../utils/style";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

export interface ContactMessageProps {
    email: string;
    message: string;
    succeeded: boolean;
    errors: boolean;
    submitting: boolean;
}

const ContactMessage = ({ email, message, succeeded, errors, submitting }: ContactMessageProps) => {
    if (errors) {
        return (
            <>
                <XCircleIcon className="mr-2 h-5 w-5" />
                Please use the email below
            </>
        );
    }

    if (succeeded) {
        return (
            <>
                <CheckCircleIcon className="mr-2 h-5 w-5" />
                Awesome! I will get back to you
            </>
        );
    }

    if (submitting) {
        return <>Sending your message...</>;
    }

    if (!email && !message) {
        return <>What&apos;s your email?</>;
    }

    if (!email && message) {
        return <>But... What&apos;s your email?!</>;
    }

    if (email && !message) {
        return <>Don&apos;t be shy</>;
    }

    return (
        <>
            Send email
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "currentColor" }} className="ml-2">
                <path d="M21.426,11.095l-17-8c-0.35-0.164-0.763-0.113-1.061,0.133C3.066,3.473,2.937,3.868,3.03,4.242l1.212,4.849L12,12 l-7.758,2.909L3.03,19.758c-0.094,0.374,0.036,0.77,0.335,1.015C3.548,20.923,3.772,21,4,21c0.145,0,0.29-0.031,0.426-0.095l17-8 C21.776,12.74,22,12.388,22,12S21.776,11.26,21.426,11.095z" />
            </svg>
        </>
    );
};

const ContactSection = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [{ submitting, succeeded, errors }, handleSubmit] = useForm("xayalezv");

    useEffect(() => {
        if (succeeded) {
            setEmail("");
            setMessage("");
        }
    }, [succeeded]);

    return (
        <Section className="text-center mt-24 sm:mt-32" id="contact">
            <Section.Title className="">
                Contact <Emoji label="call me hand" icon="🤙" />
            </Section.Title>
            <Section.Subtitle>Get in touch! I don&apos;t bite...</Section.Subtitle>
            <div className="flex justify-center">
                <form className="flex flex-col w-[400px] max-w-[90%]" name="contact" onSubmit={handleSubmit}>
                    <div className="text-left">
                        <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                            Email address
                        </label>
                        <input
                            disabled={succeeded}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            required
                            className="w-full rounded-lg px-4 py-3 border border-gray-300 shadow-inner focus:ring-gray-700 focus:shadow-none focus:border-gray-700 placeholder-gray-400"
                        />
                    </div>
                    <div className="text-left mt-5">
                        <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                            Message body
                        </label>
                        <textarea
                            disabled={succeeded}
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            id="message"
                            name="message"
                            placeholder="I think you're very handsome..."
                            rows={8}
                            required
                            className="resize-y w-full rounded-lg px-4 py-3 border border-gray-300 shadow-inner focus:ring-gray-700 focus:shadow-none focus:border-gray-700 placeholder-gray-400"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!email || !message || succeeded || submitting || errors.length > 0}
                        className={classNames(
                            "mt-6 flex items-center justify-center text-base px-0 py-2 rounded-lg text-white disabled:cursor-default disabled:bg-gray-100 disabled:text-gray-400 bg-gray-800 hover:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300 ease-in-out",
                            succeeded ? "disabled:bg-green-500 disabled:text-white" : "",
                            errors.length > 0 ? "disabled:bg-red-500 disabled:text-white" : ""
                        )}
                    >
                        <ContactMessage email={email} message={message} succeeded={succeeded} errors={errors.length > 0} submitting={submitting} />
                    </button>
                </form>
            </div>
            <Section.CTO>
                You can to contact me at <Link href="mailto:victor@vimtor.io">contact@vimtor.io</Link>
                <br />
                or reach out on social media <Emoji label="wink face" icon="😉" />
            </Section.CTO>
        </Section>
    );
};

export default ContactSection;
