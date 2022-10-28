module.exports = {
  
  projectId: 'tbkbp1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://next.privat24.ua'
  }

  
})

module.exports = {
  
    component: {
      excludeSpecPattern: "path/to/**/*.js"
    },
    e2e: {
      excludeSpecPattern: "cypress/e2e/2-advanced-examples/*.js"
    }
  
}
