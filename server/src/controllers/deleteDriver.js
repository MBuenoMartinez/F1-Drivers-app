const { Drivers } = require("../db");

const deleteDriver = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) res.status(404).json({ message: "Driver id not found" });
    const deleteDriverDb = await Drivers.findByPk(id);
    await deleteDriverDb.destroy();
    return res.status(200).json({ message: "The driver has being deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = deleteDriver;
