/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: "#008080 ",
        brightColor: "#00ACC1",
        backgroundDarkTextColor: "#00ffff",
        DarkHeader: "#121212",
        DarkContainer: "#111827",
        DarkCard: "#4b5563",
        lightDark: "#083344",
      },
      backgroundImage: {
        "my-image-class0": "url('./assets/doctor13.jpg')",
        "my-image-class1": "url('./assets/doctor14.jpg')",
        "my-image-class2": "url('./assets/doctor7.jpg')",
        "my-image-class3": "url('./assets/doctor9.jpg')",
        "my-image-class4": "url('./assets/doctor10.jpg')",
        "my-image-class5": "url('./assets/doctor11.jpg')",
        "my-image-class6": "url('./assets/doctor12.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-gradients")],
};
