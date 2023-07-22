const [ Dog, Temperament ] = require('../dB');
const axios = require("axios");

const getDogsFromApi = async () => {
    const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}&limit=8");
    const apiData = await apiUrl.data.map((dog) => {
        return {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            temperament: dog.temperament,
            origin: dog.origin,
        };
    });
    return apiData;
    };

    const getDogsFromDB = async () => {
        return await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ["temperament"],
                through: {
                    attributes: [],
            },
            },
        });
    }
    const getAllDogs = async () => {
        let apiData = await getDogsFromApi ();
        let dbData = await getDogsFromDB ();
        const allData = dbData.concat(apiData); //verificar si se pone concat en dbData
        return allData; // sugeria .map
    };

module.exports = getAllDogs;
