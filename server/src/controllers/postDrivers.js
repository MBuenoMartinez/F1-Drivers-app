const { Driver, Teams } = require("../db");
const { Op } = require("sequelize");
const defaultImage =
  "https://i.pinimg.com/originals/be/32/fe/be32fe61944b433376718b5d2d42dfcb.jpg";
const postDrivers = async (req, res) => {
  try {
    const { name, lastName, description, image, nationality, dob, teams } =
      req.body;
    if (!name || !lastName || description || !nationality || !dob || !teams)
      res.status(400).send("Faltan Datos");

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
        image: image ? image : defaultImage,
        nationality,
        dob,
      });

      // busca en el array de teams en la db y compara con los ingresado en el form del front

      //limpiar los espacios
      const teamsArray = teams.map((team) => team.trim());
      console.log(teamsArray);
      //
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
      res.status(400).send("Este nombre está ocupado");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postDrivers;
