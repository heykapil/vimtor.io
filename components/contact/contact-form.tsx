import { classNames } from "../../utils/style";
import ContactMessage from "./contact-message";
import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";

function ContactForm() {
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
    );
}

export default ContactForm;
