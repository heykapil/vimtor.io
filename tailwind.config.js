const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const range = require("lodash/range");

const animationUtilities = plugin(({ addUtilities }) => {
    const initialDelays = [75, 100, 150, 300, 500, 750];
    const finalDelays = range(50).map((i) => 1000 + i * 500);
    const delays = [...initialDelays, ...finalDelays];
    const delayUtilities = delays.map((delay) => {
        return {
            [`.animation-delay-${delay}`]: {
                "animation-delay": `${delay}ms`,
            },
        };
    });
    addUtilities(delayUtilities);
});

module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media",
    theme: {
        screens: {
            sm: "600px",
            // => @media (min-width: 640px) { ... }

            md: "700px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1200px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1600px",
            // => @media (min-width: 1536px) { ... }

            "3xl": "1800px",
            // => @media (min-width: 1800px) { ... }
        },
        gridTemplateColumns: {
            // Complex site-specific column configuration
            projects: "800px 800px",
        },
        boxShadow: {
            inner: "inset 0 0 5px rgb(0 0 0 / 15%), inset 0 2px 2px rgb(0 0 0 / 10%)",
        },
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                "fade-in-down": {
                    from: {
                        opacity: "0",
                        transform: "translateY(1em)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                wiggle: {
                    "0%": {
                        transform: "rotate(10deg)",
                    },
                    "25%": {
                        transform: "rotate(-10deg)",
                    },
                    "50%": {
                        transform: "rotate(20deg)",
                    },
                    "75%": {
                        transform: "rotate(-5deg)",
                    },
                    "100%": {
                        transform: "rotate(0deg)",
                    },
                },
                "bounce-in": {
                    "0%": {
                        transform: "scale(0.5)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "scale(1)",
                        opacity: 1,
                    },
                },
                "fly-in-down": {
                    from: {
                        opacity: 0,
                        transform: "translateY(-1rem) translateX(-50%)",
                    },
                    to: {
                        opacity: 1,
                        transform: "translateY(0) translateX(-50%)",
                    },
                },
                "fly-in-up": {
                    from: {
                        opacity: 0,
                        transform: "translateY(1rem) translateX(-50%)",
                    },
                    to: {
                        opacity: 1,
                        transform: "translateY(0) translateX(-50%)",
                    },
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 1s forwards ease-in-out",
                wiggle: "wiggle 1s",
                "bounce-in": "bounce-in 0.7s cubic-bezier(0.15, 1.5, 0.5, 1) forwards 0.5s",
                "fly-in-down": "fly-in-down 0.5s ease-in-out forwards 3s",
                "fly-in-up": "fly-in-up 0.5s ease-in-out forwards 3s",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [animationUtilities],
};
