import {useRef} from "react";
import {useIntersection} from "react-use";

export default function useElementVisible() {
    const ref = useRef(null);
    const intersection = useIntersection(ref, {
        root: null,
        rootMargin: '96px',
        threshold: 1
    });

    const visible = intersection && intersection.isIntersecting;

    return [ref, visible] as const
}