const [ Dog, Temperament ] = require('../dB');
const axios = require("axios");

const postDogs = async ({
    id, image,
    breed,
    height,
    weight,
    life_span,
    temperament
}) => {
    const apiUrl = await axios.get("https://thedogapi.org/v1/breeds");
    const apiData = await apiUrl.data.map((dog) => {
        return {
            id: dog.id,
            image: dog.image.url,
            breed: dog.name,
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
        const allData = apiData.concat(dbData.concat); //verificar si se pone concat en dbData
        return allData; // sugeria .map
    };

module.exports = postDog;
