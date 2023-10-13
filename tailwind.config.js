/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#4EA8DE",
        purpleDark: "#5E60CE",
        personblack: "#0D0D0D",
        persongray: "#1A1A1A",
        persongray_500: "#262626",
      },
    },
  },
  plugins: [],
};
