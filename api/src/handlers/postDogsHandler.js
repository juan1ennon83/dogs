const getTemperaments = require( '../controllers/getTemperamentsController' );
const postDog = require( '../controllers/postDogsController');
const Temperament = require( '../db' );


const postDogHandler = async (req, res) => {
  try {
      getTemperaments();
      const { name, image, minHeight, maxHeight, minWeight, maxWeight, minLifeSpan, maxLifeSpan, temperaments } = req.body;
      if (temperaments.length === 0) {
          throw new Error("The dog must have at least one temperament");
      }
      const newDog = await postDog(name, image, parseInt(minHeight), parseInt(maxHeight), parseInt(minWeight), parseInt(maxWeight), parseInt(minLifeSpan), parseInt(maxLifeSpan));
      const temp = await Temperament.findAll({
          where: {
              name: temperaments
          }
      })
      await newDog.addTemperament(temp);
      res.status(200).json({ message: `Created dog ${newDog.name} with id ${newDog.id}` });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports = postDogHandler;