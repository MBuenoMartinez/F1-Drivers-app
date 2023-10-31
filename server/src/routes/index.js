const { Router } = require("express");
const getDrivers = require("../controllers/getDrivers");
const getDriversById = require("../controllers/getDriversById");

const getTeams = require("../controllers/getTeams");
const postDrivers = require("../controllers/postDrivers");
const router = Router();

router.get("/drivers", getDrivers);
router.get("/drivers/:id", getDriversById);
router.get("/teams", getTeams);
router.post("/createDriver", postDrivers);

module.exports = router;
