const defaultTheme = require("tailwindcss/defaultTheme");

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
            transitionTimingFunction: {
                elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            },
            keyframes: {
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
            },
            animation: {
                wiggle: "wiggle 1s",
                rocket: "rocket 300ms ease-in forwards",
                "bounce-in": "bounce-in 0.7s cubic-bezier(0.15, 1.5, 0.5, 1) forwards 0.5s",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
