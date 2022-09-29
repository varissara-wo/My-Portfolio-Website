/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brightGreen: "hsl(173,99%,60%)",
        brightPurple: "hsl(261,88%,82%)",
        superBrightGreen: "hsl(136,84%,82%)",
        blue: "hsl(232,33%,42%)",
        pink: "hsl(8,83%,68%)",
        brightBrown: "hsl(4,29%,90%)",
        superBrightBrown: "hsl(348,61%,94%)",
        darkPurple: "hsl(261,24%,32%)",
        brightYellow: "hsl(43,100%,76%)",
      },
    },
  },
  plugins: [],
};
