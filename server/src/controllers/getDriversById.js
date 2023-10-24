const { Driver } = require("../db");

const getDriversById = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findOne({
      where: {
        id: id,
      },
    });

    if (!driver) {
      return res
        .status(404)
        .send("No se encontró un driver con el ID especificado");
    }

    return res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDriversById;
