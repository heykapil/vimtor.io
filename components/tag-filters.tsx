import Emoji from "./emoji";
import { useCallback, useState } from "react";
import { useEffectOnce, useEvent } from "react-use";
import { Transition } from "@headlessui/react";
import { classNames } from "../lib/style";
import { useInitialValue } from "../hooks/use-initial-value";
import { motion } from "framer-motion";

interface TagFiltersProps {
    value: Array<string>;
    onChange: (value: string[]) => void;
    options: Array<{ value: string; label: string }>;
    animate?: boolean;
}

function TagFilters({ value, onChange, options }: TagFiltersProps) {
    const [showScrollHelper, setShowScrollHelper] = useState(false);
    const initialValue = useInitialValue(typeof window !== "undefined" ? window.location.search : null);

    const checkSmallScreen = useCallback(() => {
        setShowScrollHelper(window.screen.width < 600);
    }, []);

    useEffectOnce(checkSmallScreen);
    useEvent("resize", checkSmallScreen);

    return (
        <div className="relative">
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
                initial={initialValue ? "show" : "hidden"}
                animate="show"
                className="flex justify-start sm:justify-center max-w-[90%] mt-8 mb-20 sm:mb-16 mx-auto overflow-x-auto sm:overflow-x-hidden relative sm:flex-wrap xl:max-w-[950px]"
                aria-label="projects filter"
                aria-describedby={showScrollHelper ? "scroll-helper" : undefined}
                role="menu"
                onScroll={() => setShowScrollHelper(false)}
                onClick={() => setShowScrollHelper(false)}
            >
                {options.map((option) => {
                    const isChecked = value.includes(option.value);
                    const isInitial = initialValue?.includes(option.value);
                    return (
                        <motion.button
                            key={option.value}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        delay: Math.max(0, Math.random() - 0.5),
                                    },
                                },
                            }}
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
                                    onChange(value.filter((x) => x !== option.value));
                                } else {
                                    onChange([...value, option.value]);
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
                            {option.label}
                        </motion.button>
                    );
                })}
            </motion.div>
            <Transition
                appear
                show={showScrollHelper}
                className="absolute -bottom-8 w-full flex justify-center"
                enter="transition transform duration-500 delay-500"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div id="scroll-helper" role="tooltip" aria-hidden="false" className="text-gray-400 italic">
                    Swipe for more filters <Emoji label="up" icon="👆" />
                </div>
            </Transition>
        </div>
    );
}

export default TagFilters;
