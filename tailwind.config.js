/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '5xl' : '2500px',
        '3xl': '1700px',
        'xs' : '375px',
    },
    }  
  },
  plugins: [],
}

// sm	640px   md	768px   lg	1024px    xl	1280px     2xl	1536px