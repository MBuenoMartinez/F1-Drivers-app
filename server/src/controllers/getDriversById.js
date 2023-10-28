const { Driver } = require("../db");
const axios = require("axios");
const URL_BASE = "http://localhost:5000/drivers";
const defaultImage =
  "https://i.pinimg.com/originals/be/32/fe/be32fe61944b433376718b5d2d42dfcb.jpg";
const getDriversById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      const driverDb = await Driver.findByPk(id);

      if (driverDb.id) {
        return res.status(200).json(driverDb);
      } else {
        return res
          .status(404)
          .send("No se encontró un driver con el ID especificado");
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
    return res
      .status(404)
      .send("No se encontró un driver con el ID especificado");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDriversById;

// const axios = require('axios');
// const URL = 'https://api.thedogapi.com/v1/breeds/';
// const { Dog } = require('../db');

// const getDogById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const source = isNaN(id) ? "bdd" : "api"

//     if (source === "bdd") {
//       const findDog = await Dog.findByPk(id);

//       if (findDog) {
//         return res.status(200).json(findDog);
//       }
//     }

//     const { data: dogData } = await axios(URL + id);

//     if (dogData) {
//       const imageResponse = await axios.get(https://api.thedogapi.com/v1/images/search?breed_ids=${id});
//       let image = imageResponse.data[0].url;

//       const dog = {
//         id: id,
//         name: dogData.name,
//         image,
//         height: dogData.height.metric,
//         weight: dogData.weight.metric,
//         life_span: dogData.life_span,
//       };

//       return res.status(200).json(dog);
//     }
//   } catch (error) {
//     return res.status(500).json({error: "No se encontró ningún perro con ese ID"});
//   }
// };

// module.exports = {
//   getDogById,
// }
