/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0071FF",
        "black": "#121826",
        "gray": "#929292",
        "red": "#F22E2E",
        "green": "#0FBC20",
        "lightGreen": "#80D22E"
      },
      fontSize: {
        "xl": 32,
        "lg": 24,
        "md": 16,
        "sm": 14,
        "xs": 12
      }
    },
  },
  plugins: [],
}

