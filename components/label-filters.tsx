import Emoji from "./emoji";
import { useCallback, useState } from "react";
import { useEffectOnce, useEvent } from "react-use";
import { Transition } from "@headlessui/react";

interface LabelFiltersProps {
    value: string[];
    onChange: (value: string[]) => void;
    options: string[];
}

const LabelFilters = ({ value, onChange, options }: LabelFiltersProps) => {
    const [showScrollHelper, setShowScrollHelper] = useState(false);

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
                onScroll={() => {
                    setShowScrollHelper(false);
                }}
            >
                {options.map((option) => {
                    const isChecked = value.includes(option);
                    return (
                        <button
                            key={option}
                            role="menuitemcheckbox"
                            aria-checked={isChecked}
                            tabIndex={0}
                            className={`capitalize border border-gray-400 rounded-full py-2 px-4 cursor-pointer mr-4 flex-shrink-0 select-none transition-all duration-100 ease-in outline-none hover:bg-gray-100 focus:bg-gray-100 mb-4 ${
                                isChecked ? "border-gray-900 bg-gray-900 text-gray-100 hover:bg-gray-900 focus:bg-gray-900" : ""
                            }`}
                            onClick={() => {
                                if (isChecked) {
                                    onChange(value.filter((x) => x !== option));
                                } else {
                                    onChange([...value, option]);
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
                            {option}
                        </button>
                    );
                })}
            </div>
            <Transition show={showScrollHelper} leave="transition-opacity duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                <span
                    id="scroll-helper"
                    role="tooltip"
                    aria-hidden="false"
                    className="absolute w-full -bottom-8 opacity-0 animate-fly-in-down animation-delay-150 text-gray-400 italic transform"
                >
                    Scroll for more filters <Emoji label="up" icon="👆" />
                </span>
            </Transition>
        </div>
    );
};

export default LabelFilters;
