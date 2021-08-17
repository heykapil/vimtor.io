import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

interface ContactMessageProps {
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

export default ContactMessage;
