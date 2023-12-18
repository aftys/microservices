/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    
    extend: {
      backgroundImage:{
        "auth-light":"linear-gradient(to right, #cffef6 0%, white 50%,#cffef6 100%)",
        "auth-dark":"linear-gradient(to right, rgb(17, 24, 39) 0%, rgb(27, 38, 61)  50%, rgb(17, 24, 39) 100%)"
      },
      colors: {
        
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        'half-trans': 'rgba(255 ,255 ,255 ,0.5)',
        'dark-trans': 'rgba(0 ,0 ,0 ,0.5)',
        'main-blue' : '#22d3ee',
        'dark-app':'rgb(10, 13, 22)',
        'light': {
          'bg': {
            'main': '#e7eaf6',
            'second': '#a2a8d3',
          }

        }, 'dark': {
          'bg': {
            'main': 'rgb(17, 24, 39)',
            'second':'rgb(27, 38, 61)'
          }
        }
      }
      
    },
  },
  plugins: [],
}