import { ComponentPropsWithoutRef, Children, ReactNode } from "react";
import { classNames } from "../lib/style";

interface EmptyMessageProps {
    count: number;
    rotate?: boolean;
    children: ReactNode[];
}

function Message({ className, ...props }: ComponentPropsWithoutRef<"p">) {
    return <p className={classNames("text-lg sm:text-2xl pt-8 pb-32 text-center")} {...props} />;
}

export function EmptyMessage({ count, children, rotate = false }: EmptyMessageProps) {
    const totalChildren = Children.count(children);
    const index = rotate ? count % totalChildren : Math.min(count - 1, totalChildren - 1);
    const component = Children.toArray(children)[index];
    return <>{component}</>;
}

EmptyMessage.Option = function EmptyMessageOption({ children }: { children: any }) {
    return <Message>{children}</Message>;
};

export default EmptyMessage;
