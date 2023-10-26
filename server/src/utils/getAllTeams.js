const axios = require("axios");
const { Teams } = require("../db");
const URL_BASE = "http://localhost:5000/drivers";
const getAllTeams = async (req, res) => {
  try {
    const response = await axios.get(URL_BASE);
    if (!response) {
      return res.status(400).send("Faltan Datos"); // Devuelve una respuesta al cliente
    }

    // Resto del código para procesar la respuesta
    const { data } = response;
    const uniqueTeams = new Set(
      data
        .map((driver) => driver.teams)
        .join(",")
        .split(/,\s*/)
        .filter((team) => team.length > 0)
    );
    const allTeams = Array.from(uniqueTeams);

    for (const teams of allTeams) {
      await Teams.findOrCreate({
        where: { name: teams },
        defaults: {
          name: teams,
        },
      });
    }

    return allTeams;
  } catch (error) {
    console.error("Error al crear equipos:", error);
  }
};

module.exports = getAllTeams;
