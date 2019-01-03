const Boom = require('boom')
const Ordens = require('./orders.model')
const api = {}

api.list = (request, h, error) => {
  /** Lista dos usuarios do sistema.
  * @param {String} name nome do usuario
  */
  // console.log('----List----')
  // console.log(request.query)
  const { query, page, pagesize, order } = request.query
  // console.log(query)
  
  try {
    // console.log(Ordens)
    return JSON.stringify(Ordens)
  } catch (e) {
    console.log(e)
  }
}

api.show = (request, h, error) => {
  const orderId = request.params.orderId
  // console.log(userId)
  try {
    let busca 
    Ordens.map(order => {
      if (order._id === parseInt(orderId)) {
        busca = order
      }
    })
    return JSON.stringify(busca)
  } catch (e) {
    console.log(e)
    return Boom.badData(e.message)
  }
}

module.exports = api
