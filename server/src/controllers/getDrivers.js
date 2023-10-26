const { Driver, Teams } = require("../db");
const axios = require("axios");
const URL_BASE = "http://localhost:5000/drivers";
const defaultImage = "../../public/defaultImage.png";

const getDrivers = async (req, res) => {
  try {
    const { name } = req.query;
    const response = await axios.get(URL_BASE);
    if (!response) res.status(400).send("Faltan datos");
    const { data } = response;

    const driverApi = data.map((driver) => ({
      id: driver.id,
      name: driver.name.forename,
      lastName: driver.name.surname,
      description: driver.description,
      image: driver.image.url ? driver.image.url : defaultImage,
      nationality: driver.nationality,
      dob: driver.dob,
    }));

    const driversDb = await Driver.findAll({
      attributes: [
        "id",
        "name",
        "lastName",
        "description",
        "image",
        "nationality",
        "dob",
      ],
      includes: Teams,
    });
    if (!driversDb) res.status(400).send("No hay drivers cargados");
    const allDrivers = [...driverApi, ...driversDb];

    if (name) {
      const filterByName = allDrivers.filter((driver) =>
        driver.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.status(200).json(filterByName);
    }

    return res.status(200).json(allDrivers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDrivers;
