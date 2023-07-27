const { Router } = require('express');
const { 
  getALLDogsHandler, 
  getByIDHandler,
  getAllDogsByNameHandler,
 } = require('../handlers/getDogsHandler');
const postDogHandler = require('../handlers/postDogsHandler');

const dogs = Router();

dogs.get( '/', getALLDogsHandler );
dogs.get( '/:id', getByIDHandler );
dogs.get( '/name', getAllDogsByNameHandler );
dogs.post( '/',  postDogHandler );;

module.exports = dogs;