/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helveticaLight: "helveticaLight",
        helveticaMedium: "helveticaMedium",
        poppinsRegular: "poppinsRegular",
        poppinsSemiBold: "poppinsSemiBold",
      },
    },
  },
  plugins: [],
}