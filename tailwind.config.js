/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'Helvetica Neue', 'Tahoma', 'Verdana', 'Segoe', 'sans-serif'],
      'display': ['Absender', 'Open Sans', 'Helvetica Neue', 'Tahoma', 'Verdana', 'Segoe', 'sans-serif'],
      'body': ['Open Sans', 'Helvetica Neue', 'Tahoma', 'Verdana', 'Segoe', 'sans-serif'],
    },
    extend: {
      colors: {
        info: {
          DEFAULT: '#0885d8',
          contra: colors.white,
        },
        success: {
          DEFAULT: '#2ab25c',
          contra: colors.white,
        },
        warning: {
          DEFAULT: '#fbc700',
          contra: colors.white,
        },
        alert: {
          DEFAULT: '#ef2508',
          contra: colors.white,
        },
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 5s ease forwards",
      },
    },
  },
  plugins: [],
}

