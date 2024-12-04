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
        "light": "#202c33",
        "dark": "#111b21",
        "chat": "#101a20",
        "outline": "#222d34",
        "green": "#25d366",
        "seen": "#53bdeb",
        "color": "#8696a0",
        "input": "#2a3942"
      },
      fontFamily: {
        helvetica: ['var(--font-helvetica)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
}
