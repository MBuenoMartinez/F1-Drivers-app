const { Driver } = require("../db");

const postDrivers = async (req, res) => {
  try {
    const { name, lastName, description, image, nationality, dob } = req.body;
    if (!name || !lastName || description || image || !nationality || !dob) {
      res.status(400).send("Faltan Datos");
      return; // Salir de la función después de enviar la respuesta
    }

    const findDriver = await Driver.findOne({
      where: {
        name: name,
        lastName: lastName,
      },
    });

    if (!findDriver) {
      const newDriver = await Driver.create({
        name,
        lastName,
        description,
        image,
        nationality,
        dob,
      });
      res.status(200).json(newDriver);
    } else {
      res.status(400).send("Este nombre está ocupado");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postDrivers;
