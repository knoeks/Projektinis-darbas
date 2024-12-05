import daisyui from "daisyui"


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FC4747', // Red
          dark: '#161D2F',   // Dark Navy
          light: '#10141E',  // Blackish Navy
          white: '#FFFFFF',  // White
          accent: '#5A698F', // Blue-Grey
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Assuming 'Outfit' is imported via a font provider like Google Fonts
      },
      fontSize: {
        'heading-l': ['32px', { lineHeight: '40px', fontWeight: '300' }], // Light
        'heading-m': ['24px', { lineHeight: '32px', fontWeight: '300' }], // Light
        'heading-s': ['24px', { lineHeight: '32px', fontWeight: '500' }], // Medium
        'heading-xs': ['18px', { lineHeight: '24px', fontWeight: '500' }], // Medium
        'body-m': ['15px', { lineHeight: '24px', fontWeight: '300' }], // Light
        'body-s': ['15px', { lineHeight: '24px', fontWeight: '300' }], // Light
      },
      boxShadow: {
        'input-focus': '0 0 0 2px rgba(252, 71, 71, 0.5)', // Red focus ring for inputs
      },
    },
  },
  plugins: [daisyui],
}

