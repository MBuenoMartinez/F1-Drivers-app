const axios = require("axios");
const { Driver } = require("../db");
const URL_BASE = "http://localhost:5000/drivers";

const getAllDrivers = async () => {
  try {
    const response = await axios.get(URL_BASE);
    if (!response) res.status(400).send("Faltan Datos");
    const { data } = response;

    for (const driverData of data) {
      // Verifica si el conductor ya existe en la base de datos por su lastName
      const existingDriver = await Driver.findOne({
        where: {
          name: driverData.name.forename,
          lastName: driverData.name.surname,
        },
      });

      if (!existingDriver) {
        // El conductor no existe en la base de datos, crea un nuevo registro
        await Driver.create({
          name: driverData.name.forename,
          lastName: driverData.name.surname,
          description: driverData.description,
          image: driverData.image.url,
          nationality: driverData.nationality,
          dob: driverData.dob,
        });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllDrivers;

// const getTemperaments = async (req, res) => {
//   try {
//     // Hacer una solicitud a la API para obtener datos de razas de perros
//     const response = await axios.get(URL);

//     // Verificar si la solicitud se realizó con éxito (código de estado 200)
//     if (response.status === 200) {
//       const data = response.data;

//       const uniqueTemperaments = new Set(
//         data
//           .map((dog) => dog.temperament)
//           .join(', ') // Unir todas las cadenas en una cadena separada por comas
//           .split(/,\s*/) // Dividir por comas seguidas de espacios
//           .filter((temperament) => temperament.length > 0) // Eliminar cadenas vacías
//       );

//       const temperamentsArray = Array.from(uniqueTemperaments);

//       for (const temperament of temperamentsArray) {

//         // Busca el temperamento en la base de datos por su nombre (puedo reemplazar por bulk create)
//         await Temperament.findOrCreate({
//           where: { temperament: temperament },
//           defaults: {
//             temperament: temperament
//         }
//         });
//       }
