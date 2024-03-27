/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./src/**/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        "theme-bgc": "var(--bg-color)",
        "theme-text": "var(--text-color)",
        "primary-btn-bg": "var(--primary-btn-bg)",
        "primary-btn-text": "var(--primary-btn-text)"
      },
      height: {
        "header-height": "var(--header-height)",
        "footer-height": "var(--footer-height)",
        "total-height":
          "calc(100% - var(--header-height) - var(--footer-height))"
      }
    }
  },
  plugins: []
};
