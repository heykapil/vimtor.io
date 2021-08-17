import Emoji from "./emoji";
import Section from "./section";
import { useEffect, useState } from "react";
import Link from "./link";
import { useForm } from "@formspree/react";
import { classNames } from "../utils/style";
import ContactMessage from "./contact-message";

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
