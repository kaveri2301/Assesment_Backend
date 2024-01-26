
//import employee controllers
const {addEmployee,updateEmployee,findEmployees,findParticularEmployee,deleteEmployee} = require('../Controller/EmployeeController')

//import express package
const express = require('express')

//import express() method from express package
const router = express.Router();

//file upload
const photoUpload = require('../fileUpload')

//insert router for employee
router.post('/add', photoUpload.single('image'),addEmployee)

//update router for employee
router.put('/update/:email', photoUpload.single('image'),updateEmployee)

//find router for single employees
router.get('/find/:email',findParticularEmployee)

//find router for all employees
router.get('/findall', findEmployees)

//delete router for single employee
router.delete('/delete/:email', deleteEmployee)

module.exports = router


