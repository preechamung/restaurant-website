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
      'lt-xs': { max: '450px' },
      'lt-sm': { min: '450px', max: '650px' },
      'lt-md': { min: '650px', max: '850px' },
      'lt-lg': { min: '850px', max: '1024px' },
      'lt-xl': { min: '1024px', max: '1280px' },
      'lt-2xl': { min: '1280px', max: '1536px' },
      'lt-3xl': { min: '1536px', max: '2000px' },
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