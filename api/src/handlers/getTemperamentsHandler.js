const getTemperaments = require( '../controllers/getTemperamentsController' );
const { Temperament } = require( '../db' );


const getTemperamentsHandler = async (req, res) => {
  try {
      await getTemperaments();
      const allTemperaments = await Temperament.findAll()
      res.status(200).json(allTemperaments);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports = getTemperamentsHandler;