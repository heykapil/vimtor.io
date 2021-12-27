import { useState } from "react";
import { classNames } from "../utils/style";

const animations = {
    wiggle: "animate-wiggle",
    rocket: "animate-rocket",
};

interface EmojiProps {
    label: string;
    icon: string;
    animation?: keyof typeof animations;
    reset?: boolean;
}

function Emoji({ label, icon, animation = "wiggle", reset = true }: EmojiProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <span
            className={classNames("inline-block emoji", hovered ? animations[animation] : "")}
            role="img"
            aria-label={label}
            onMouseEnter={() => {
                if (!hovered) {
                    setHovered(true);
                    if (reset) {
                        setTimeout(() => {
                            setHovered(false);
                        }, 1100);
                    }
                }
            }}
        >
            {icon}
        </span>
    );
}

export default Emoji;
