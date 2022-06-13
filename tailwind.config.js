/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('/public/assets/images/bg.png')",
      },
    },
    colors: {
      white: "#E4F2E7",
      black: "#2D3E40",
      gray: "#97A6A0",
      darkGreen: "#387373",
      lightGreen: "#93BFB7",
      lightRed: "#F87171",
      darkRed: "#B91C1C",
    },
  },
  plugins: [],
  corePlugins: {
    appearance: false,
  },
};
