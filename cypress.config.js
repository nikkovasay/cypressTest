const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress\\config", `${file}.json`);
  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found");
    return {}
  }
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "dvh6te",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern:
      "cypress/e2e/{1-getting-started,2-advanced-examples}/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: true, //This allows me to visit a different URL in the test via a link
    baseUrl: "https://www.google.com",
    defaultCommandTimeout: 5000,
    viewportWidth: 1024,
    viewportHeight: 768,
    env: {
      first_name: "John123",
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      automationTestStore_homepage: "https://automationteststore.com",
    },
    baseUrl: "http://www.webdriveruniversity.com",
    screenshotsFolder: "cypress/screenshots",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    retries:{
      runMode: 1,
      openMode: 1,
    }
  },
});
