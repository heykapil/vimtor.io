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
                    "99%": {
                        transform: "translate(100px, -100px)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "translate(0px, 0px)",
                        opacity: 0,
                    },
                },
            },
            animation: {
                wiggle: "wiggle 1s",
                rocket: "rocket 175ms ease-in forwards",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
