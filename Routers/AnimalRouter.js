const express = require('express');
const route = express.Router();


const aniamalController = require('../Controllers/AnimalController');


route.get('/',aniamalController.getAnimal);
route.get('/:id',aniamalController.getByIdAnimal);
route.post('/',aniamalController.postAnimal);
route.delete('/:id',aniamalController.DeleteAnimal);
route.put('/:id',aniamalController.PutAnimal);

module.exports = route;