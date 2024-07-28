// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "gradient-1": "#4C62EF",
        "gradient-2": "#21325F",
        "primary": "#2B3D83",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
