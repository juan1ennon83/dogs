const { Router } = require('express');
const getTemperamentsHandler = require('../handlers/getTemperamentsHandler');


const temperaments = Router();

temperaments.get( '/', getTemperamentsHandler );


module.exports = temperaments;