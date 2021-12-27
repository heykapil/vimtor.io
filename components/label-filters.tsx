import Emoji from "./emoji";
import { useCallback, useState } from "react";
import { useEffectOnce, useEvent } from "react-use";
import { Transition } from "@headlessui/react";
import { classNames } from "../utils/style";
import { useInitialValue } from "../hooks/use-initial-value";

export interface Label {
    name: string;
    slug: string;
}

interface LabelFiltersProps {
    value: Array<string>;
    onChange: (value: string[]) => void;
    labels: Array<Label>;
}

function LabelFilters({ value, onChange, labels }: LabelFiltersProps) {
    const [showScrollHelper, setShowScrollHelper] = useState(false);
    const initialValue = useInitialValue(value);

    const checkSmallScreen = useCallback(() => {
        setShowScrollHelper(window.screen.width < 600);
    }, []);

    useEffectOnce(checkSmallScreen);
    useEvent("resize", checkSmallScreen);

    return (
        <div className="relative">
            <div
                className="scroll-shadow flex justify-start sm:justify-center max-w-[90%] mt-8 mb-20 sm:mb-16 mx-auto overflow-x-auto sm:overflow-x-hidden relative sm:flex-wrap xl:max-w-[950px]"
                aria-label="projects filter"
                aria-describedby={showScrollHelper ? "scroll-helper" : undefined}
                role="menu"
                onScroll={() => setShowScrollHelper(false)}
            >
                {labels.map((label) => {
                    const isChecked = value.includes(label.slug);
                    const isInitial = initialValue.includes(label.slug);
                    return (
                        <button
                            key={label.slug}
                            role="menuitemcheckbox"
                            aria-checked={isChecked}
                            tabIndex={0}
                            className={classNames(
                                "border rounded-full py-2 px-4 cursor-pointer mr-4 shrink-0 select-none transition-all duration-100 ease-in outline-none mb-4",
                                isChecked
                                    ? "border-gray-800 bg-gray-800 text-gray-100 hover:bg-gray-700"
                                    : "border-gray-400 bg-white hover:bg-gray-100 focus:bg-gray-100",
                                isInitial ? "order-first sm:order-none" : ""
                            )}
                            onClick={() => {
                                if (isChecked) {
                                    onChange(value.filter((x) => x !== label.slug));
                                } else {
                                    onChange([...value, label.slug]);
                                }
                            }}
                            onKeyDown={(event) => {
                                const button = event.target as HTMLButtonElement;
                                if (event.key === "ArrowDown") {
                                    event.preventDefault();
                                    const nextButton = button.nextElementSibling as HTMLButtonElement;
                                    if (nextButton) {
                                        nextButton.focus();
                                    }
                                } else if (event.key === "ArrowUp") {
                                    event.preventDefault();
                                    const previousButton = button.previousElementSibling as HTMLButtonElement;
                                    if (previousButton) {
                                        previousButton.focus();
                                    }
                                }
                            }}
                        >
                            {label.name}
                        </button>
                    );
                })}
            </div>
            <Transition show={showScrollHelper} leave="transition-opacity duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                <span
                    id="scroll-helper"
                    role="tooltip"
                    aria-hidden="false"
                    className="absolute w-full -bottom-8 opacity-0 animate-fly-in-down animation-delay-150 text-gray-400 italic"
                >
                    Scroll for more filters <Emoji label="up" icon="👆" />
                </span>
            </Transition>
        </div>
    );
}

export default LabelFilters;
