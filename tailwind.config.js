module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/**/*.css",
  ],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      ringWidth: ["hover", "active", "focus"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
