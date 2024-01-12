/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
        '95vh': '95vh',
      }
    }
  },
  plugins: [],
}
