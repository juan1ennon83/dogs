const { 
  getAllDogs, 
  getAllDogsByName, 
  getDogByID,
} = require('../controllers/getDogsControler');
const getTemperaments = require( '../controllers/getTemperamentsController' );


const getALLDogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
      getTemperaments();
      if (name) {
          const dogsName = await getAllDogsByName(name);
          res.status(200).send(dogsName);
      } else if (!name) {
          const allDogs = await getAllDogs();
          res.status(200).send(allDogs);
      };
  }
  catch (error) {
      res.status(400).json({ error: error.message });
  };
};

const getByIDHandler = async (req, res) => {
  const { id } = req.params;
  try {
      const dogFind = await getDogByID(id);
      res.status(200).send(dogFind);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getAllDogsByNameHandler = async (req, res) => {
  const name = req.params.name;
  try {
    const allDogs = await getAllDogs();
    const filterName = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
    if (filterName.length > 0) {
      res.status(200).json(filterName);
    } else {
      throw new Error(`Dog not found ${name}`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getALLDogsHandler,
  getByIDHandler,
  getAllDogsByNameHandler,
};