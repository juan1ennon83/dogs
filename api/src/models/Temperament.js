const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('temperament', {   //my dog model creation based on PI request parameters
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, 
    },
    temperament: {    //name = breed 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  //(verificar)
  },
}, {timestamp: false});
}