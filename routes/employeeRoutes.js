const express = require('express');
const { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const router = express.Router();

// Define routes
router.post('/', createEmployee);
router.get('/', getEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router; // Ensure this line is correct
