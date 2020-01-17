var express = require('express');
var router = express.Router();
var category = require('../controller/categoryController.js');
var expense = require('../controller/expenseController.js');

router.get('/categories', category.getCategories);
router.post('/addCategories', category.addCategories);
router.put('/updateCategories/:id', category.updateCategories);
router.delete('/deleteCategories/:id', category.deleteCategories);


router.get('/expense', expense.getexpense);
router.post('/addExpense', expense.addExpense);
router.put('/updateExpense/:id', expense.updateExpense);
router.delete('/deleteExpense/:id', expense.deleteExpense);


module.exports = router