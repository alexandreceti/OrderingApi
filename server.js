'use strict'

const Hapi = require('hapi')

const server = Hapi.server({
  port: 8080,
  routes: {
    cors: true,
    log: { collect: true }
  }
})

const config = require('./src/config/config')

config(server)
  .then(() => {
    server.start()
    console.log('Applications Ordering.Api...')
    console.log('Server ' + process.env.NODE_ENV + ' running at:', server.info.uri)
  })
  .catch(error => {
    console.log(error)
    process.exit(1)
  })

module.exports = server
