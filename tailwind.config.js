/** @type {import('tailwindcss').Config} */
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
    extend: {},
  },
  plugins: [],
}

