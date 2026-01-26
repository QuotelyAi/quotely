/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8eef7',
          100: '#c5d4e8',
          200: '#9eb8d9',
          300: '#779bcb',
          400: '#5a85bf',
          500: '#3d6fb3',
          600: '#2B4C8C',  // Main navy blue
          700: '#244079',
          800: '#1e3a78',  // Exact blue from design
          900: '#162853',
        },
        secondary: {
          50: '#fff1e6',
          100: '#ffd9b3',
          200: '#ffc199',
          300: '#ffa980',
          400: '#ff9166',
          500: '#FF6B35',  // Main orange
          600: '#e55a2b',
          700: '#cc4a21',
          800: '#b33917',
          900: '#99290d',
        },
        accent: {
          50: '#fffce6',
          100: '#fff7b3',
          200: '#fff299',
          300: '#ffed80',
          400: '#ffe866',
          500: '#FFD700',  // Main yellow/gold
          600: '#e6c200',
          700: '#ccac00',
          800: '#b39700',
          900: '#998100',
        },
        neutral: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#E4E4E4',  // Light gray background
          300: '#d0d0d0',
          400: '#b0b0b0',
          500: '#909090',
          600: '#707070',
          700: '#505050',
          800: '#303030',
          900: '#29274C',  // Dark text color
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}