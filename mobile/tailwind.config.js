/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        card: "hsl(0 0% 6%)",
        muted: "hsl(0 0% 10%)",
        border: "hsl(0 0% 15%)",
        primary: "hsl(0 0% 85%)",
        secondary: "hsl(0 0% 12%)",
        card_foreground: "hsl(0 0% 95%)",
        muted_foreground: "hsl(0, 0%, 60%)",
        primary_foreground: "hsl(0 0% 10%)",
      },
      fontFamily: {
        archivo_400: ["Archivo_400Regular"],
        archivo_600: ["Archivo_600SemiBold"],
        archivo_700: ["Archivo_700Bold"],
        poppins_400: ["Poppins_400Regular"],
        poppins_500: ["Poppins_500Medium"],
        poppins_600: ["Poppins_600SemiBold"],
        poppins_700: ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
};
