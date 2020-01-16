var express = require('express');
var router = express.Router();
var category = require('../controller/categoryController.js');

router.get('/categories', category.getCategories);
router.post('/addCategories', category.addCategories);
router.put('/updateCategories/:id', category.updateCategories);
router.delete('/deleteCategories/:id', category.deleteCategories);

module.exports = router