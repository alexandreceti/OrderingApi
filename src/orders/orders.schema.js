const Joi = require('joi')

let schema = {}

schema.list = Joi.object().keys({
  query: Joi.string().min(3).max(60).optional().default(''),
  page: Joi.number().optional().default(0),
  pagesize: Joi.number().optional().default(25),
  order: Joi.string().optional().default('name')
})

schema.orderModel = Joi.object().keys({
  _id: Joi.string().uuid().optional(),
  name: Joi.string().min(3).max(60).required(),
  console: Joi.string().allow('').optional(),
  descricao: Joi.string(),
  preco: Joi.number().optional(),
  created_at: Joi.date(),
  updated_at: Joi.date()
})

schema.response = Joi.object().keys({
  _id: Joi.string().uuid().optional(),
  name: Joi.string().min(3).max(60).required(),
  console: Joi.string().allow('').optional(),
  descricao: Joi.string(),
  preco: Joi.number().optional(),
  created_at: Joi.date(),
  updated_at: Joi.date()
})

schema.orderResponse = Joi.object().keys({
  _id: Joi.number().optional(),
  client_id: Joi.number().optional(),
  items: Joi.array().items().optional()
})

schema.responseArry = Joi.array().items(schema.response)

module.exports = schema
