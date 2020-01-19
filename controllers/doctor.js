const Doctor = require('../models/doctor');


exports.getIndex = (req, res, next) => {
    res.render('../views/doctor/main');
}

exports.getPatientRegistration = (req, res, next) => {
    res.render('../views/patient/register');
}