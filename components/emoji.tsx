import { useState } from "react";

interface EmojiProps {
    label: string;
    icon: string;
}

const Emoji = ({ label, icon }: EmojiProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <span
            className={`inline-block ${hovered ? "animate-wiggle" : ""}`}
            role="img"
            aria-label={label}
            onMouseEnter={() => {
                if (!hovered) {
                    setHovered(true);
                    setTimeout(() => {
                        setHovered(false);
                    }, 1100);
                }
            }}
        >
            {icon}
        </span>
    );
};

export default Emoji;
