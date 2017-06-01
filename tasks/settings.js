module.exports = {
  "browsersync": {
    "files": [
      "./src/assets/_compiled/styles.css",
      "./src/assets/_compiled/*.js",
      "./src/*.html"
    ],
    "server": "src", // use this if it IS a static site
    // "proxy": "", // use this if it's NOT a static site, ex: app.mysite.dev
    "notify": false,
    "open": false
  },
  "templatePath": "/*.html" // Relative to the src directory
}
