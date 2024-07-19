const { getAll, create, getOne, remove, update } = require('../controllers/pet.controllers');
const express = require('express');

const petRouter = express.Router();

petRouter.route('/')
    .get(getAll)
    .post(create);

petRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = petRouter;