const { Router } = require("express");
const getDrivers = require("../controllers/getDrivers");
// const getDriversById = require("../controllers/getDriversById");
// const getDriversByName = require("../controllers/getDriversByName");
// const getTeams = require("../controllers/getTeams");
// const postDrivers = require("../controllers/postDrivers");
const router = Router();

router.get("/drivers", getDrivers);
// router.get("/drivers/:idDriver", getDriversById);
// router.get('/drivers/name?="..."', getDriversByName);
// router.get("/teams", getTeams);
// router.post("/drivers", postDrivers);

module.exports = router;
