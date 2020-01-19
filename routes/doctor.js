const path = require('path');
const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctor");

router.get('/', doctorController.getIndex);

router.get('/register', doctorController.getPatientRegistration);

module.exports = router;
