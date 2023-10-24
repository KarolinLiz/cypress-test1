import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    pageLoadTimeout: 6000,
     baseUrl: "https://jsonplaceholder.typicode.com/",
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx,spec.js}',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
