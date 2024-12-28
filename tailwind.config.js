/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#F1C93B",
      },
      fontFamily: {
        zain: ["Zain", "Josefin Sans"], // Add fallback font family if needed
      },
    },
  },
  plugins: [],
};
