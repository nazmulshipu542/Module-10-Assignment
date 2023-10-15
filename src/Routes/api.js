const express = require('express');

//routing
const router = express.Router();

//StudentController
const StudentsController = require('../Controllers/StudentsController');
router.get = ('/StudentsGet', StudentsController.StudentsGet);
router.post = ('/StudentsPost', StudentsController.StudentsPost);

//WorksController
const WorksController = require('../Controllers/WorksController');
router.get = ('/WorksGet', WorksController.WorksGet);
router.post = ('/WorksPost', WorksController.WorksPost);

//OTPController
const OTPController = require('../Controllers/OTPController');
router.get = ('/OTPGet', OTPController.OTPGet);
router.post = ('/OTPPost', OTPController.OTPPost);

//Mongoose
router.post('/InsertStudents', StudentsController.InsertStudents);
router.get('/ReadStudents', StudentsController.ReadStudents);
router.post('/UpdateStudents/:id', StudentsController.UpdateStudents);
router.get('/DeleteStudents/:id', StudentsController.DeleteStudents);

router.post('/InsertWorks', WorksController.InsertWorks);
router.get('/ReadWorks', WorksController.ReadWorks);
router.post('/UpdateWorks/:id', WorksController.UpdateWorks);
router.get('/DeleteWorks/:id', WorksController.DeleteWorks);

router.post('/InsertOTP', OTPController.InsertOTP);
router.get('/ReadOTP', OTPController.ReadOTP);
router.post('/UpdateOTP/:id', OTPController.UpdateOTP);
router.get('/DeleteOTP/:id', OTPController.DeleteOTP);

module.exports = router;