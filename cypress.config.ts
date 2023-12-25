import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results', 
    overwrite: false, 
    html: false, 
    json:true
  },
  e2e: {
    viewportWidth: 1200, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'http://localhost:4200',
  },
});
