const express = require('express')
const asyncHandler = require('express-async-handler');
const {Drink} = require('../../db/models')
const router = express.Router();

router.post('/', asyncHandler(async (req, res)=> {
    const {name, description, creatorId, categoryId } = req.body
    console.log('hit')
    const drink = await Drink.makeDrink( {name, description, creatorId, categoryId })
    return res.json(drink)

}))

router.get('/:id(\\d+)', asyncHandler( async (req,res)=> {
    console.log(req.body)
    const {id} = req.body
    const drink = await Drink.getOne(parseInt(id))
    return res.json(drink)
}))


module.exports = router
