/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'appBlack':'#0E0E0E',
        'textGrey':'#9f9f9f',
        'textGreyLight':'#777777',
        'textBlue':'#058BDB',
        'appBlue':'#008BD9',
        'bgGreyDark':'#111111'

      }
    },
  },
  plugins: [],
}