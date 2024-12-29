/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#202c33",
        dark: "#111b21",
        chat: "#101a20",
        outline: "#222d34",
        primary: "#25d366",
        primarylight: "#0a332c",
        seen: "#53bdeb",
        color: "#8696a0",
        icon: "#aebac1",
        input: "#2a3942",
        hover: "#374248",
        menu: "#233138",
        menuHover: "#182229",
      },
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
