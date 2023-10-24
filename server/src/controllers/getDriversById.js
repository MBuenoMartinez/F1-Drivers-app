// const axios = require("axios");
// const URL_BASE = "http://localhost:5000/drivers";
// const getDriversById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { data } = await axios(`${URL_BASE}/${id}`);
//     const { name, description, image, nationality, dob } = data;
//     if (name) {
//       const driver = {
//         name,
//         description,
//         image,
//         nationality,
//         dob,
//       };
//       return res.status(200).json(driver);
//     }
//     return res.tatus(404).json({ mesage: "Driver not found" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = getDriversById;
