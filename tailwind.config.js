/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all src files
  ],
  plugins: [require('daisyui')], // Add DaisyUI plugin
};