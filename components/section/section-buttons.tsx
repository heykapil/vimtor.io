import { classNames } from "../../lib/style";

interface SectionButtonsProps {
    children: any;
    className?: string;
}

function SectionButtons({ children, className }: SectionButtonsProps) {
    return (
        <div
            className={classNames(
                "sm:flex max-w-[50vh] px-4 sm:max-w-none sm:gap-3 mx-auto space-y-3 sm:space-y-0 justify-center items-center",
                className
            )}
        >
            {children}
        </div>
    );
}

export default SectionButtons;
