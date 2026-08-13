const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Point this to your live site, local folder, or staging server
    baseUrl: 'https://petstore.swagger.io/v2', 
    
    // Looks for your test specs anywhere in the project
    specPattern: "cypress/support/e2e"
    // 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
    , 
    
    // Disables unnecessary framework/bundler hook tracking
    supportFile: false, 
    
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    },
  },
  env: {
    john: {
          username: 'John',
          password: '12345'
          },
    serra: {
          username: 'Serra',
          password: '54321'
    }
}
});
