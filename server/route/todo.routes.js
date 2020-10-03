const { index, findOne, store, update, destroy } = require('../service/todo')
const express = require('express');

const route = express.Router();

route.get('', index).get('/:id', findOne).post('', store).patch('/:id', update).delete('/:id', destroy)

module.exports = route;