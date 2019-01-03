const api = require('./orders.api.js')
const schema = require('./orders.schema')

const Joi = require('joi')

let rotas = [
  {
    path: '/OrderingApi/v1/orders',
    method: 'GET',
    handler: api.list,
    options: {
      description: 'List orders',
      notes: 'Acesso a lista de orders',
      tags: ['api', 'orders']
    }
  },
  {
    path: '/OrderingApi/v1/orders/{orderId}',
    method: 'GET',
    handler: api.show,
    options: {
      description: 'Busca ordens',
      notes: 'Localiza ordens pelo Id',
      tags: ['api', 'orders'],
      validate: {
        params: {
          orderId: Joi.string().required()
        }
      }
    }
  }
]
module.exports = rotas
