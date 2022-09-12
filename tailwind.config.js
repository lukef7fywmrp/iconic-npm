/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
      center: "center 38.1291%",
    },
    fontFamily: {
      mouse: ["Mouse Memoirs", "sans-serif"],
      teko: ["Teko", " sans-serif"],
      author: ["Author", "sans-serif"],
      inter: ["Inter", "sans-serif;"],
      britney: ["britney", "sans-serif;"],
    },
    extend: {
      backgroundImage: {
        "header-price":
          "url('https://content.rolex.com/dam/homepage/cut-out/homepage-profesional-watches-submariner-m124060-0001-cut-out-text.jpg')",
      },
    },
  },
  plugins: [],
};
