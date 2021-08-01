import Emoji from "./emoji";
import Section from "./section";
import { useState } from "react";
import Link from "./link";

export interface ContactMessageProps {
    email: string;
    message: string;
}

const ContactMessage = ({ email, message }: ContactMessageProps) => {
    if (!email && !message) return <>What&apos;s your email?</>;
    if (!email && message) return <>But..What&apos;s your email?!</>;
    if (email && !message) return <>Don&apos;t be shy</>;

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

    return (
        <Section className="text-center mt-24 sm:mt-32" id="contact">
            <Section.Title>
                Contact <Emoji label="call me hand" icon="🤙" />
            </Section.Title>
            <Section.Subtitle>Get in touch! I don&apos;t bite...</Section.Subtitle>
            <div className="flex justify-center">
                <form action="POST" className="flex flex-col w-[400px] max-w-[90%]" data-netlify="true" name="contact">
                    <label className="flex flex-col text-left mb-[24px]">
                        <span className="mb-[8px] color text-gray-500">Email address</span>
                        <input
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            required
                            className="text-base rounded-lg px-4 py-3 border border-transparent shadow-inner focus:outline-none focus:border-gray-500 placeholder-gray-400"
                        />
                    </label>
                    <label className="flex flex-col text-left mb-[24px]">
                        <span>Message</span>
                        <textarea
                            onChange={(event) => setMessage(event.target.value)}
                            name="message"
                            placeholder="I think you're very handsome..."
                            rows={8}
                            required
                            className="resize-y text-base rounded-lg px-4 py-3 border border-transparent shadow-inner focus:outline-none focus:border-gray-500 placeholder-gray-400"
                        />
                    </label>
                    <button
                        disabled={!email || !message}
                        className="flex items-center justify-center font-semibold text-base px-0 py-2 rounded-lg text-white disabled:bg-gray-100 disabled:text-gray-400 bg-gray-700 cursor-pointer border-none focus:bg-gray-900 hover:bg-gray-900 transition-colors duration-300 ease-in-out"
                        type="submit"
                    >
                        <ContactMessage email={email} message={message} />
                    </button>
                </form>
            </div>
            <Section.CTO>
                You can to contact me at <Link href="mailto:victor@vimtor.io">victor@vimtor.io</Link>
                <br />
                or reach out on social media <Emoji label="wink face" icon="😉" />
            </Section.CTO>
        </Section>
    );
};

export default ContactSection;
