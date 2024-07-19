const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Pet = sequelize.define('pet', {
    // Definimos las columnas aquí
    owner_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner_lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    species: { //especie de la mascota
        type: DataTypes.STRING,
        allowNull: false
    },
    breed: { // raza de la mascota
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vaccinated: { //vacunado
        type: DataTypes.STRING,
        allowNull: false
    },
    anamnesicos: { //ultima desparasitacion
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Pet;