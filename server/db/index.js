const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const db = new Sequelize(
  `postgres://localhost:5432/${pkg.name}`,
  {
    logging: false
  }
)

module.exports = db

//need to add code to tell mocha to close after tests