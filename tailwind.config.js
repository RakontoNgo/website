/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'off',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin)'],
        francoisOne: ['var(--font-francois_one)'],
      },
      colors: {
        background: '#fffff8',
        text: '#454545',
        primary: '#13795f',
        secondary: '#91c98c',
        tertiary: '#febe10',
        quaternary: '#dd6d48',
        fifth: '#24a3e3',
      },
      maxWidth: {
        content: '1700px',
      },
      animation: {
        backgroundOverlay: 'backgroundOpacityAnimation 1s linear',
        backgroundAnimation: 'backgroundAnimation 2s linear',
        fadeIn: 'fadeIn 1s linear',
      },
      keyframes: {
        backgroundOpacityAnimation: {
          '0%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '20%',
          },
        },
        backgroundAnimation: {
          '0%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      iframe: '815px',
    },
  },
  plugins: [],
};
