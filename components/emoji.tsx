import {useEffect, useState} from "react";
import { classNames } from "../lib/style";
import useElementVisible from "../hooks/use-element-visible";

const animations = {
    wiggle: "animate-wiggle",
    rocket: "animate-rocket",
};

type AnimationName = keyof typeof animations;

interface EmojiProps {
    label: string;
    icon: string;
    animation?: AnimationName;
    reset?: boolean;
    appear?: boolean;
    delay?: number;
}

function Emoji({ label, icon, delay, animation = "wiggle", reset = true, appear = false }: EmojiProps) {
    const [hovered, setHovered] = useState(false);
    const [ref, visible] = useElementVisible()

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
            setTimeout(playAnimation, delay ?? 0);
        }
    }, [appear, delay]);

    useEffect(() => {
        if (!reset && !visible) {
            setHovered(false);
        }
    }, [reset, visible])

    return (
        <span
            ref={ref}
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
