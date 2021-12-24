export const classNames = (...classes: Array<string | null | undefined>) => classes.filter(Boolean).join(" ");
