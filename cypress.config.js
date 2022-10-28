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
