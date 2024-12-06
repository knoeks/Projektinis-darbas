import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      // pavyzdys: bg-red text-red
      colors: {
        red: "#FC4747", // Red
        dark: "#161D2F", // Dark Navy
        light: "#10141E", // Blackish Navy
        white: "#FFFFFF", // White
        accent: "#5A698F", // Blue-Grey
      },

      // šriftas: font-outfit
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], // Assuming 'Outfit' is imported via a font provider like Google Fonts
      },

      // pavyzdys: text-heading-xs
      fontSize: {
        "heading-l": ["32px", { lineHeight: "40px", fontWeight: "300" }], // Light
        "heading-m": ["24px", { lineHeight: "32px", fontWeight: "300" }], // Light
        "heading-s": ["24px", { lineHeight: "32px", fontWeight: "500" }], // Medium
        "heading-xs": ["18px", { lineHeight: "24px", fontWeight: "500" }], // Medium
        "body-m": ["15px", { lineHeight: "24px", fontWeight: "300" }], // Light
        "body-s": ["15px", { lineHeight: "24px", fontWeight: "300" }], // Light
        "specific_search": ["16px", {lineHeight: "24px", fontWeight: "300" }], // Text for mobile search bar
        "specific_search-results": ["20px", {lineHeight: "24px", fontWeight: "300" }], // Text for mobile search results
      },
    },
  },
  plugins: [daisyui],
};
