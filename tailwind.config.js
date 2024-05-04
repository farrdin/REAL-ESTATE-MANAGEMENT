/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: " 'Poppins', sans-serif",
        work: " 'Work Sans', serif",
        play: "'Playfair Display', serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
