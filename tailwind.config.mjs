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
        16: "4rem", // adds spacing of 16 (64px)
        18: "4.5rem", // adds spacing of 18 (72px)
        20: "5rem", // adds spacing of 20 (80px)
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
        partyPink: "var(--party-pink)",
      },
    },
  },
  plugins: [],
};
