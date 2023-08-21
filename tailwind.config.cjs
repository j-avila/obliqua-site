/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

// module.exports = {
//   // ...
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   // ...
// }
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accentColor: "#1A1251",
        backgroundColor: "#1E1E1E",
        textColor: "#E3E3E3",
      },
      fontFamily: {
        sans: ["raleway", "Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
