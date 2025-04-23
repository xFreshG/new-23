/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
      },
      fontSize: {
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'mobile-text': ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'mobile-heading': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
};