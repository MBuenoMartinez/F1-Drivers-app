const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const getAllDrivers = require("./src/utils/getAllDrivers");

conn
  .sync({ force: false }) // ponemos el force en false para que cada vez que se reinicia el servidor no se cambien los ids de los drivers
  .then(() => {
    server.listen(PORT, async () => {
      await getAllDrivers();
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
