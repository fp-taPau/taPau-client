/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        25: "6.25rem", // adds spacing of 25 (100px)
        30: "7.5rem", // adds spacing of 30 (120px)
        35: "8.75rem", // adds spacing of 35 (140px)
        40: "10rem", // adds spacing of 40 (160px)
        50: "12.5rem", // adds spacing of 50 (200px)
        55: "13.75rem", // adds spacing of 55 (220px)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
