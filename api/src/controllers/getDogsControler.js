const axios = require('axios');
const { Dog, Temperament } = require('../db.js');
const URL = 'https://api.thedogapi.com/v1/breeds';
require( 'dotenv' ).config();
const { API_KEY } = process.env;


const getDogsApi = async () => {
  try {
    const api = await axios.get( `${URL}?apikey=${API_KEY}` );
    const allDogs = api.data?.map(dog => {
      return {
        id: dog.id,
        name: dog.name,
        image: dog.image.url,
        minHeight: parseInt(dog.height.metric.split("-")[0]),
        maxHeight: parseInt(dog.height.metric.split("-")[1]),
        minWeight: parseInt(dog.weight.metric.split("-")[0]),
        maxWeight: parseInt(dog.weight.metric.split("-")[1]),
        minLifeSpan: parseInt(dog.life_span.split("-")[0]),
        maxLifeSpan: parseInt(dog.life_span.split("-")[1]),
        temperaments: dog.temperament,
        from: "API"
      };
    });
    return allDogs;
  } catch {
    throw new Error("Can't get dog information");
  }
};

const getAllDogs = async () => {
  try {
    const allDogsApi = await getDogsApi();
    const allDogsDb = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    });
    const allDogsDbWithTemps = allDogsDb.map(dog => {
      return {
        id: dog.id,
        name: dog.name,
        image: dog.image,
        minHeight: dog.minHeight,
        maxHeight: dog.maxHeight,
        minWeight: dog.minWeight,
        maxWeight: dog.maxWeight,
        minLifeSpan: dog.minLifeSpan,
        maxLifeSpan: dog.maxLifeSpan,
        temperaments: dog.temperaments.map(temp => { return temp.name }).join(', '),
        from: dog.from
      }
    })
    return [...allDogsApi, ...allDogsDbWithTemps];
  } catch (error) {
    throw new Error(error);
  };
};

const getAllDogsByName = async (name) => {
  try {
    const allDogs = await getAllDogs();
    const filterName = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
    if (filterName.length > 0) {
      return filterName
    } else {
      throw new Error(`Dog not found ${name}`)
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getDogByID = async (id) => {
  try {
    const allDogs = await getAllDogs();
    const filterName = allDogs.filter(dog => dog.id == id)
    if (filterName.length > 0) {
      return filterName[0];
    } else {
      throw new Error(`ID dog not found, ID = ${id}`)
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getDogsApi, 
  getAllDogs,
  getAllDogsByName,
  getDogByID,
};