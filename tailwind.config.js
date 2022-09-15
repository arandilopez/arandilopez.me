module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.liquid",
    "./src/**/*.md",
    "./frontend/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#e91d63",
          dark: "#bf124d",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"'],
        title: ["Oswald"],
        mono: ['"Fira Mono"'],
      },
    },
  },
  plugins: [],
};
