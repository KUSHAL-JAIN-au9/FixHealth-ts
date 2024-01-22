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
        "my-image-class0":
          "url('https://res.cloudinary.com/dgdp9188v/image/upload/v1705844217/fixhealth/main/zggeefzexixviyrqcenf.jpg')",
        "my-image-class1":
          "url('https://res.cloudinary.com/dgdp9188v/image/upload/v1705844216/fixhealth/main/bf9wuyx9bf4uwfjeymmm.jpg')",
        "my-image-class2":
          "url('https://res.cloudinary.com/dgdp9188v/image/upload/v1705844216/fixhealth/main/mrqzxq9hdqkxbr6phhu6.jpg')",
        "my-image-class3": "url('./assets/doctor9.jpg')",
        "my-image-class4": "url('./assets/doctor7.jpg')",
        "my-image-class5":
          "url('https://res.cloudinary.com/dgdp9188v/image/upload/v1705844216/fixhealth/main/xiqimvpda2je82wg6zro.jpg')",
        "my-image-class6":
          "url('https://res.cloudinary.com/dgdp9188v/image/upload/v1705844216/fixhealth/main/ydkp4m19928j9ctlqsjc.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-gradients")],
};
