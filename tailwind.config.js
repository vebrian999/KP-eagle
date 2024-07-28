// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "gradient-1": "#4C62EF",
        "gradient-2": "#21325F",
        "primary": "#2B3D83",
        "button1": "#62DE4E",
        "button2": "#22E17A",

      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
