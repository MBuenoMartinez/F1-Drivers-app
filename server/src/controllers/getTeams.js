const axios = require("axios");
const { Teams } = require("../db");
const URL_BASE = "http://localhost:5000/drivers";
const getDrivers = async (req, res) => {
  try {
    const response = await axios.get(URL_BASE);
    if (!response) {
      return res.status(400).json({ message: "Missing data" });
    }

    const { data } = response;
    const uniqueTeams = new Set(
      data
        .map((driver) => driver.teams)
        .join(",")
        .split(/,\s*/)
        .map((team) => team.trim())
        .filter((team) => team.length > 0)
    );
    const allTeams = Array.from(uniqueTeams);

    for (const team of allTeams) {
      await Teams.findOrCreate({
        where: { name: team },
        defaults: {
          name: team,
        },
      });
    }

    const teamsDb = await Teams.findAll();

    return res.status(200).json(teamsDb);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDrivers;
