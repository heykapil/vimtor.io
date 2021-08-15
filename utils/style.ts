export const classNames = (...classes: Array<string | null | undefined>) => classes.filter(Boolean).join(" ");

export const focusRingClasses = "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700";
