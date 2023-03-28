let router = require('express').Router();
const {
    addCategory,
    getCategory,
    editCategory,
    deleteCategory
} = require('../controller/Category');

router.get('/', getCategory)
router.post('/', addCategory)
router.put('/:categoryId', editCategory)
router.delete('/:categoryId', deleteCategory)
module.exports = router