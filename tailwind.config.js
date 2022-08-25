/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '650px',
      'md': '850px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
      'lt-3xl': { max: '2000px' },
      'lt-2xl': { max: '1536px' },
      'lt-xl': { max: '1280px' },
      'lt-lg': { max: '1024px' },
      'lt-md': { max: '850px' },
      'lt-sm': { max: '650px' },
      'lt-xs': { max: '450px' },
    },
    extend: {
      colors: {
        golden: "#DCCA87",
        black: "#0C0C0C",
        gray: "#545454",
        crimson: "#F5EFDB",
        grey: "#AAAAAA",
        white: "#FFFFFF",
      },
      fontFamily: {
        base: ["Cormorant\\ Upright", 'serif'],
        alt: ['Open\\ Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}