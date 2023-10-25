// const axios = require("axios");
// const { Teams } = require("../db");
// const URL_BASE = "http://localhost:5000/drivers";

// const getAllUniqueTeams = async () => {
//   try {
//     const response = await axios.get(URL_BASE);
//     if (!response) {
//       console.log("Faltan Datos");
//       return; // Salir de la función en caso de error
//     }
//     const { data } = response;
//     const uniqueTeams = new Set(
//       data
//         .map((driver) => driver.teams)
//         .join(", ") // Unir todas las cadenas en una cadena separada por comas
//         .split(/,\s*/) // Dividir por comas seguidas de espacios
//         .filter((team) => team.length > 0) // Eliminar cadenas vacías
//     );

//     const allTeams = Array.from(uniqueTeams);

//     for (const team of allTeams) {
//       // Busca el temperamento en la base de datos por su nombre (puedo reemplazar por bulk create)
//       await Teams.findOrCreate({
//         where: { name: team },
//         defaults: {
//           name: team,
//         },
//       });
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// module.exports = getAllUniqueTeams;
