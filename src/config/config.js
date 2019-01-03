'use strict'
// require('dotenv').config()
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')
const Pack = require('../../package')

const swaggerOptions = {
  // basePath: '/v1',
  // pathReplacements: ['livros', 'autores'],
  info: {
    title: 'Ordering.Api',
    version: Pack.version,
    contact: {
      name: 'Alexandre Cunha Cruz Oliveira, henrique franzoni keppel'
    }
  },
  expanded: 'list',
  documentationPath: '/swagger',
  grouping: 'tags',
  sortEndpoints: 'path',
  jsonEditor: true,
  // sortTags: 'tags',
  tags: [
    {
      name: 'order',
      description: 'recurso de orders'
    }
  ]
}

module.exports = async function register (server) {
  try {
    return await server.register([{
      plugin: require('inert')
    },
    {
      plugin: require('hapi-router'),
      options: {
        routes: 'src/**/*.routes.js'
      }
    },
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
    ])
  } catch (err) {
    // Handle err
    console.log(err)
    // process.exit(1)
    throw err
  }
}
