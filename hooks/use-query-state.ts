import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

export const useQueryArrayState = (key: string) => {
    const { replace, query, pathname } = useRouter();

    const value = query[key];

    const state = useMemo(() => {
        if (Array.isArray(value)) {
            return value;
        }
        if (value) {
            const newValue = value.split(",");
            if (newValue.length === 1 && !newValue[0]) {
                return [];
            }
            return newValue;
        }
        return [];
    }, [value]);

    const setState = useCallback(
        (newState: Array<string>) => {
            const newQuery = { ...query, [key]: newState };
            if (newState.length === 0) {
                delete newQuery[key];
            }
            // @ts-ignore
            const search = new URLSearchParams(newQuery).toString();
            if (search) {
                replace(`${pathname}?${search}`, undefined, { shallow: true });
            } else {
                replace(pathname, undefined, { shallow: true });
            }
        },
        [query, key, replace, pathname]
    );

    return [state, setState] as const;
};
