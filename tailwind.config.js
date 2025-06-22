/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
