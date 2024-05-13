const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://news-uk--uat23.sandbox.lightning.force.com",
    "chromeWebSecurity": false,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});