/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        agrandir: ["Agrandir", "sans-serif"],
        typaugraphy: ["TyPAUgraphy", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        1: "0.25rem", // adds spacing of 1 (4px)
        16: "4rem", // adds spacing of 16 (64px)
        18: "4.5rem", // adds spacing of 18 (72px)
        20: "5rem", // adds spacing of 20 (80px)
        25: "6.25rem", // adds spacing of 25 (100px)
        30: "7.5rem", // adds spacing of 30 (120px)
        35: "8.75rem", // adds spacing of 35 (140px)
        40: "10rem", // adds spacing of 40 (160px)
        45: "11.25rem", // adds spacing of 45 (180px)
        50: "12.5rem", // adds spacing of 50 (200px)
        55: "13.75rem", // adds spacing of 55 (220px)
        100: "25rem", // adds spacing of 100 (400px)
        110: "27.5rem", // adds spacing of 110 (440px)
        120: "30rem", // adds spacing of 120 (480px)
        140: "35rem", // adds spacing of 140 (560px)
        160: "40rem", // adds spacing of 160 (640px)
        180: "45rem", // adds spacing of 180 (720px)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        partyPink: "var(--party-pink)",
        secondaryPink: "var(--secondary-pink)",
        selectedPink: "var(--selected-pink)",
        inactiveText: "var(--inactive-text)",
        secondaryText: "var(--secondary-text)",
        hoveredContainer: "var(--hovered-container)",
      },
      animation: {
        dots: "dots 1s steps(1, end) infinite",
      },
      keyframes: {
        dots: {
          "0%, 20%": { content: '"."' },
          "40%": { content: '".."' },
          "60%": { content: '"..."' },
          "80%, 100%": { content: '""' },
        },
      },
    },
  },
  plugins: [],
};
