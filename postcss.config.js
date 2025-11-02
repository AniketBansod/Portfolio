// Tailwind CSS v4 moved its PostCSS plugin to '@tailwindcss/postcss'.
// Using the old 'tailwindcss' key here causes Vite to throw an error.
// See: https://tailwindcss.com/docs/upgrade-guide#postcss
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
