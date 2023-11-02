const { Driver, Teams } = require("../db");
const axios = require("axios");
const URL_BASE = "http://localhost:5000/drivers";
const defaultImage =
  "https://i.pinimg.com/originals/be/32/fe/be32fe61944b433376718b5d2d42dfcb.jpg";

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
      teams: driver.teams,
    }));

    const driversDb = await Driver.findAll({
      include: [{ model: Teams, through: { attributes: [] } }],
    });

    const driversWithTeams = driversDb.map((driver) => ({
      id: driver.id,
      name: driver.name,
      lastName: driver.lastName,
      description: driver.description,
      image: driver.image,
      nationality: driver.nationality,
      dob: driver.dob,
      teams: driver.Teams.map((team) => team.name).join(", "), // Mapear solo los nombres de los equipos
    }));

    const allDrivers = [...driverApi, ...driversWithTeams];

    if (name) {
      const filterByName = allDrivers.filter((driver) =>
        driver.name.toLowerCase().includes(name.toLowerCase())
      );
      if (filterByName.length === 0)
        res.status(404).send(`No se encontro drivers con este nombre ${name}`);

      return res.status(200).json(filterByName);
    }

    return res.status(200).json(allDrivers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDrivers;
