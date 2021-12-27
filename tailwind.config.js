const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const range = require("lodash/range");

const animationDelayPlugin = plugin(({ addUtilities }) => {
    const initialDelays = [0, 75, 100, 150, 300, 500, 750];
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
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "600px",
            md: "700px",
            lg: "1024px",
            xl: "1200px",
            "2xl": "1600px",
            "3xl": "1800px",
        },
        gridTemplateColumns: {
            // Complex site-specific column configuration
            projects: "800px 800px",
            layout: "1fr auto",
        },
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
                emoji: ["Segoe UI Emoji", "Nunito", ...defaultTheme.fontFamily.sans],
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
                rocket: {
                    "0%": {
                        transform: "translate(0, 0)",
                        opacity: 1,
                    },
                    "100%": {
                        transform: "translate(400px, -400px)",
                        opacity: 0,
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
                rocket: "rocket 300ms ease-in forwards",
                "bounce-in": "bounce-in 0.7s cubic-bezier(0.15, 1.5, 0.5, 1) forwards 0.5s",
                "fly-in-down": "fly-in-down 0.5s ease-in-out forwards",
                "fly-in-up": "fly-in-up 0.5s ease-in-out forwards",
            },
        },
    },
    plugins: [animationDelayPlugin, require("@tailwindcss/forms")],
};
