/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#282c34",
        bar: "#22262d",
        "app-black": "#282c34",
        "app-white": "#abb2bf",
        "app-red": "#e06c75",
        "app-green": "#98c379",
        "app-yellow": "#e5c07b",
        "app-blue": "#61afef",
        "app-magenta": "#c678dd",
        "app-cyan": "#56b6c2",
        "br-app-white": "#c8cdd5",
        "br-app-red": "#e9969d",
        "br-app-green": "#b3d39c",
        "br-app-yellow": "#edd4a6",
        "br-app-blue": "#8fc6f4",
        "br-app-magenta": "#d7a1e7",
        "br-app-cyan": "#7bc6d0",
      },
      width: {
        a4: "210mm",
      },
      height: {
        a4: "297mm",
      },
      maxHeight: {
        a4: "297mm",
      },
      maxWidth: {
        a4: "210mm",
      },
      fontFamily: {
        resume: ["Arial"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries"), require("@tailwindcss/typography")],
};
