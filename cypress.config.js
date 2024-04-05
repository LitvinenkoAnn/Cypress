const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 720,

  env: {
    BASE_URL: 'http://localhost:4200'
  },

  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx}"
  },
});
