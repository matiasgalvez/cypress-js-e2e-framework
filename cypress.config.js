const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

const envFile = process.env.TEST_ENV ? `.env.${process.env.TEST_ENV}` : '.env';
dotenv.config({ path: envFile });
dotenv.config({ path: '.env' });

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads',
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 15000,
  viewportWidth: 1366,
  viewportHeight: 768,
  retries: {
    runMode: 1,
    openMode: 0
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  env: {
    testEnv: process.env.TEST_ENV || 'qa',
    username: process.env.TEST_USERNAME || 'tomsmith',
    password: process.env.TEST_PASSWORD || 'SuperSecretPassword!',
    invalidUsername: process.env.INVALID_USERNAME || 'invalid_user',
    invalidPassword: process.env.INVALID_PASSWORD || 'invalid_password'
  },
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://the-internet.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
