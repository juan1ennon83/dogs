const { Router } = require (' express');
const { getDogsById, getDogsByName } = require ('../controllers/');
const { getAllTemperaments } = require ('../controllers/');
const dogsRouter = Router ();

dogsRouter.get('/id', getDogsById);
dogsRouter.get('/name', getDogsByName);
dogsRouter.get('/temperament', getAllTemperaments);
//dogsRouter.get('/', getDogsByName);

module.exports = dogsRouter;