/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "secondary": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#000000",
          "base-300": "#000000",
          "base-content": "#000000",
        },
      },
    ],
  },
}

