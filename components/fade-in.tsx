import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

interface FadeInProps {
    children: any;
    delay: number;
}

export default function FadeIn({ delay, children }: FadeInProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), delay);
    }, [delay]);

    if (!show) {
        return <div className="invisible">{children}</div>;
    }

    return (
        <Transition
            appear
            show={show}
            unmount={false}
            enter="transition duration-[1.5s] ease-in-out"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
        >
            {children}
        </Transition>
    );
}
