/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "fira-code":['Fira Code', "monospace"]
      },
      colors:{
        "dark-blue": "hsla(0, 0%, 0%, 1)",
        "white1": "hsla(0, 0%, 98%, 1)",
        "gray20": "hsla(0, 0%, 68%, 1)",
        "violet":"hsla(119, 100%, 77%, 0.5)",
        "gray50": "hsla(119, 100%, 77%, 1)"        
      }
    },
  },
  plugins: [],
}

