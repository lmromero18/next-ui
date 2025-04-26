import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },
            colors: {
                primary: {
                    DEFAULT: "#7F56D9",
                    "50": "#E9D7FE",
                    "100": "#F9F5FF",
                    "200": "#cacafb",
                    "300": "#acaaf7",
                    "400": "#9E77ED",
                    "500": "#6941C6",
                    "600": "#7450db",
                    "700": "#6541c1",
                    "800": "#53389e",
                    "900": "#45337c",
                    "950": "#2a1e48",
                },
                gray: {
                    DEFAULT: "#475467",
                    "50": "#F9FAFB",
                    "100": "#98A2B3",
                    "200": "#EAECF0",
                    "300": "#b0bbc9",
                    "400": "#8696aa",
                    "500": "#677990",
                    "600": "#526277",
                    "700": "#475467",
                    "800": "#3a4452",
                    "900": "#343b46",
                    "950": "#22272f",
                },

            },
            fontFamily: {
                inter: ["var(--font-inter)"],
            },
            fontSize: {
                xl: "1.1rem",
            },

        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;