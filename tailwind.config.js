/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#EAF1FF",
        muted: "#9fb0cc",
        bg: "#0b0f17",
        card: "#0f141c",
        stroke: "#223051",
        accent: "#22ff66",
        accent2: "#16a34a"
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [],
};
