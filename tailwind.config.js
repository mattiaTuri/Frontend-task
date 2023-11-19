/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    dropShadow: {
      card: [
        "0px 0.7777777910232544px 2.9907407760620117px rgba(0, 0, 0, 0.012)",
        "0px 3.422222137451172px 6.192592620849609px rgba(0, 0, 0, 0.0196)",
        "0px 8.399999618530273px 12.350000381469727px rgba(0, 0, 0, 0.025)",
        "0px 16.177778244018555px 24.207406997680664px rgba(0, 0, 0, 0.0304)",
        "0px 27.22222137451172px 44.50925827026367px rgba(0, 0, 0, 0.038)",
        "0px 42px 76px rgba(0, 0, 0, 0.05)",
      ],
    },
    extend: {
      colors: {
        "blue-badge": "#2E3A8C",
        "green-badge": "#3B755F",
        "beige-badge": "#F2EBDB",
        "white-badge": "#FFFFFF",
        "black-badge": "#212121",
      },
    },
  },
  plugins: [],
};
