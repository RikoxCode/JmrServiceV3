/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{html,js,ts}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')({
      datatables: true,
    }),
    require("tw-elements/plugin.cjs"),
    require('daisyui')
  ],
}

