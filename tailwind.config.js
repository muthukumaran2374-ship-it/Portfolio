/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        'secondary-background': '#111111',
        accent: '#3b82f6', // Electric blue
        'text-primary': '#f9fafb', // off-white
        'text-secondary': '#9ca3af', // muted gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
