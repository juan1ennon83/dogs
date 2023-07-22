const [ dogbreeds, dogtemperaments ] = require('../dB');


const postDogs = async ({
    image, name, height, weight, life_span, temperament
}) => {
    const newDog =
        await dogbreeds.create({
            image,
            name,
            height,
            weight,
            life_span,
        })
    
    const temperamentDB =  await dogtemperaments.findAll({
            include: {
                model: Temperament,
                attributes: ["temperament"],
                through: {
                    attributes: [],
            },
            },
        });

    await newDog.Adddogtemperaments(temperamentDB);
    return newDog;
}

module.exports = postDogs;
