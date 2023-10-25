const { Teams } = require("../db");
const getDrivers = async (req, res) => {
  try {
    const teams = await Teams.findAll();

    return res.status(200).json(teams);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDrivers;
