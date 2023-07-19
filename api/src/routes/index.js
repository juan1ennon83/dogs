const { Router } = require('express');
// Importar todos los routers;
const router = Router();
const { getDogsById, getDogsByName } = require ('../controllers/');
const { getAllTemperaments } = require ('../controllers/');
const { getPostsHandler, createPostsHandler } = require("../handlers/postHandler");
const { getDogsHandler } = require('../handlers/dogsHandler');

  
  postRouter.get("/", getPostsHandler);
  postRouter.post("/", createPostsHandler);
  


router.get('/id', getDogsById);
router.get('/name', getDogsByName);
router.get('/temperament', getAllTemperaments);

router.get('/dogs', getDogsHandler);
//router.use()


module.exports = router;
