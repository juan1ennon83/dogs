const { Temperament } = require('../db.js');
const {
  getDogsApi
} = require( './getDogsControler' );


const getTemperaments = async () => {
  try {
      const dogsApi = await getDogsApi();
      let arrayTemperament = [];
      dogsApi.map(dog => {
          if (dog.temperaments) {
              arrayTemperament.push(...dog.temperaments.split(", "))
          };
      });
      arrayTemperament.map(temperamentName => {
          Temperament.findOrCreate({
              where: {
                  name: temperamentName,
              },
          });
      });
  } catch (error) {
      throw new Error(error);
  }
};

module.exports = getTemperaments;