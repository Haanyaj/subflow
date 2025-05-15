/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zinc': {
          750: '#333338',
          850: '#1f1f23',
        },
        'blue': {
          950: '#0b1a35',
        }
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.blue.500"), 0 0 20px theme("colors.blue.500")',
      },
    },
  },
  plugins: [],
};
