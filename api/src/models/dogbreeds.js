const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dog',{        //my dog model creation based on PI request parameters
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, 
    },
    image: {
      type: DataTypes.TEXT, //verificar si es STRING
      allowNull: false,
    },   // name, image, id, height, weight, life_span, temperament;
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
  },
      height: {
        type: DataTypes.FLOAT, //VERIFY ALSO WEIGHT
      allowNull: false,
  },
      weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
  },
      life_span: {
        type: DataTypes.INTEGER,
      allowNull: false,
  }}
    );
};


