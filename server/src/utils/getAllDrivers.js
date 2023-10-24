const axios = require("axios");
const { Driver } = require("../db");
const URL_BASE = "http://localhost:5000/drivers";

const getAllDrivers = async () => {
  try {
    const response = await axios.get(URL_BASE);
    if (!response) res.status(400).send("Faltan Datos");
    const { data } = response;
    // si image esta en null entoces tenemos que agregar una ----> todavia no se hace
    const drivers = data.map((driver) => {
      return {
        name: driver.name.forename,
        lastName: driver.name.surname,
        description: driver.description,
        image: driver.image.url,
        nationality: driver.nationality,
        dob: driver.dob,
      };
    });

    const createDriver = await Driver.bulkCreate(drivers);
    return createDriver;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllDrivers;
