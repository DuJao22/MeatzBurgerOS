/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./menu.html",
    "./admin-dashboard.html",
    "./login.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#E99856',
          'hover': '#E68036'
        },
        'accent': '#F28D34',
        'brown': {
          'light': '#5E210D',
          'dark': '#6A1C0B'
        },
        'cream': '#FEF2E9',
        'brand-black': '#1a1a1a'
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
