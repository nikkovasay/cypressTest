const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dvh6te',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://www.google.com",
    defaultCommandTimeout: 5000,
    },
});
