const { Drivers, Teams } = require("../db");
const axios = require("axios");
const URL_BASE = "http://localhost:5000/drivers";
const defaultImage =
  "https://i.pinimg.com/originals/be/32/fe/be32fe61944b433376718b5d2d42dfcb.jpg";
const getDriversById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      const driverDb = await Drivers.findByPk(id, { include: Teams });

      if (driverDb) {
        const driverWithTeams = {
          id: driverDb.id,
          name: driverDb.name,
          lastName: driverDb.lastName,
          description: driverDb.description,
          image: driverDb.image,
          nationality: driverDb.nationality,
          dob: driverDb.dob,
          teams: driverDb.Teams.map((team) => team.name).join(", "),
        };
        return res.status(200).json(driverWithTeams);
      } else {
        return res.status(404).json({ message: "Driver id not found" });
      }
    }

    const response = await axios.get(`${URL_BASE}/${id}`);
    const { data } = response;
    const { name, description, image, nationality, dob, teams } = data;

    if (name) {
      const driverApi = {
        id,
        name: name.forename,
        lastName: name.surname,
        description,
        image: image.url ? image.url : defaultImage,
        nationality,
        dob,
        teams,
      };
      return res.status(200).json(driverApi);
    }
    return res.status(404).json({ message: "Driver id not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDriversById;
