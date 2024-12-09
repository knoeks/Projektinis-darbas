import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary color palette
        red: "#FC4747", // Red
        dark: "#161D2F", // Dark Navy (background color)
        light: "#10141E", // Blackish Navy (form background)
        white: "#FFFFFF", // White (text and buttons)
        accent: "#5A698F", // Blue-Grey (subtle text)
        inputBorder: "#5A698F", // Border color for input fields
        errorRed: "#FF6A6A", // Error text or border for validation
      },

      fontFamily: {
        outfit: ["Outfit", "sans-serif"], // Ensures "Outfit" is used across the app
      },

      fontSize: {
        // Typography for the forms
        "heading-xl": ["40px", { lineHeight: "48px", fontWeight: "700" }], // Bold headings
        "heading-l": ["32px", { lineHeight: "40px", fontWeight: "500" }], // Form titles
        "heading-m": ["24px", { lineHeight: "32px", fontWeight: "500" }], // Smaller headings
        "heading-s": ["18px", { lineHeight: "24px", fontWeight: "500" }], // Section headings
        "body-m": ["15px", { lineHeight: "24px", fontWeight: "400" }], // Regular body text
        "body-s": ["13px", { lineHeight: "20px", fontWeight: "400" }], // Small captions or labels
      },

      borderRadius: {
        // For rounded corners on input fields and buttons
        "form-lg": "12px", // Rounded for inputs
        "form-md": "8px", // Slightly less rounded
      },

      spacing: {
        // Padding and margins for consistent spacing
        "form-gap": "16px", // Gap between form fields
        "form-padding": "24px", // Padding around the form
      },

      boxShadow: {
        // Shadow for form containers
        "form-shadow": "0px 4px 20px rgba(0, 0, 0, 0.25)", // Soft shadow for forms
      },
    },
  },
  plugins: [daisyui],
};
