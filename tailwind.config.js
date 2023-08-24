/** @type {import('tailwindcss').Config} */

const { withTV } = require("tailwind-variants/transformer");

export default withTV({
  content: ["./src/w-design-core/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
