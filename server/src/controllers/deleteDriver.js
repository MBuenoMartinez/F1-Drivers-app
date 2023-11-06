const { Driver } = require("../db");

const deleteDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDriverDb = await Driver.findByPk(id);
    await deleteDriverDb.destroy();
    return res
      .status(200)
      .json({ message: "El driver se elimino exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = deleteDriver;
