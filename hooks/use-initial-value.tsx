import { useRef } from "react";

export function useInitialValue(value: any) {
    const ref = useRef(value);
    return ref.current;
}
