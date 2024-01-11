const { Drivers, Teams } = require("../db");
const { Op } = require("sequelize");
const defaultImage =
  "https://i.pinimg.com/originals/be/32/fe/be32fe61944b433376718b5d2d42dfcb.jpg";
const postDrivers = async (req, res) => {
  try {
    const { name, lastName, description, image, nationality, dob, teams } =
      req.body;
    if (!name || !lastName || !nationality || !dob || !teams)
      res.status(400).json({ message: "Missing data" });

    const findDriver = await Drivers.findOne({
      where: {
        name: name,
        lastName: lastName,
      },
    });

    if (!findDriver) {
      const newDriver = await Drivers.create({
        name,
        lastName,
        description,
        image: image ? image : defaultImage,
        nationality,
        dob,
      });

      const teamsArray = teams.map((team) => team.trim());

      const team = await Teams.findAll({
        where: {
          name: {
            [Op.in]: teamsArray,
          },
        },
      });

      await newDriver.addTeams(team);

      res.status(200).json(newDriver);
    } else {
      res.status(400).json({ message: "The name is already taken" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postDrivers;
