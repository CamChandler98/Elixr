const express = require('express')
const asyncHandler = require('express-async-handler');
const {Category, Drink} = require('../../db/models')
const router = express.Router();

router.get('/', asyncHandler( async (req,res) => {
    let categories = await Category.findAll()
    return res.json(categories)
}))

router.get('/:id(\\d)/drinks', asyncHandler ( async (req,res) => {
    let {categoryId} = req.params

    let categoryDrinks = await Drink.findAll({
        where:
    })
}))

export default router
