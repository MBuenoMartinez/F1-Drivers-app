const { Driver } = require("../db");
const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.findAll();

    return res.status(200).json(drivers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDrivers;
