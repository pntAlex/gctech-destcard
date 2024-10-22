/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 0.6s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { rotate: '0deg' },
          '25%': { rotate: '-1deg' },
          '50%': { rotate: '1deg' },
          '75%': { rotate: '-0.5deg' },
        },
      },
    },
  },
  plugins: [],
}
