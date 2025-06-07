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
        'textGreyLight2':"#999999",
        'textBlue':'#058BDB',
        'appBlue':'#008BD9',
        'bgGreyDark':'#111111',
        'bgGreyBtn':'#1A1A1A',
        'bgGreyBtn2':'#171717',
        'bgGreyBtn3':'#1E1E1E',
        'golden-100':'#E3B527',
        'golden-600':'#6A5422',
        'green-100':'#2CAD5B',

      },
      backgroundImage: {
        'hero-section': "url('/src/assets/images/bg-herosection.png')",
      },
    },
  },
  plugins: [],
}