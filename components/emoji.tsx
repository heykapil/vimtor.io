import { useCallback, useEffect, useState } from "react";
import { classNames } from "../lib/style";

const animations = {
    wiggle: "animate-wiggle",
    rocket: "animate-rocket",
};

interface EmojiProps {
    label: string;
    icon: string;
    animation?: keyof typeof animations;
    reset?: boolean;
    appear?: boolean;
    delay?: number;
}

function Emoji({ label, icon, delay, animation = "wiggle", reset = true, appear = false }: EmojiProps) {
    const [hovered, setHovered] = useState(false);

    const playAnimation = () => {
        if (!hovered) {
            setHovered(true);
            if (reset) {
                setTimeout(() => {
                    setHovered(false);
                }, 1100);
            }
        }
    };

    useEffect(() => {
        if (appear) {
            setTimeout(playAnimation, delay || 0);
        }
    }, [appear, delay]);

    return (
        <span
            className={classNames("inline-block font-emoji", hovered ? animations[animation] : "")}
            role="img"
            aria-label={label}
            onMouseEnter={playAnimation}
        >
            {icon}
        </span>
    );
}

export default Emoji;
