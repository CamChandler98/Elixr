const express = require('express')
const asyncHandler = require('express-async-handler');
const {Drink, Review, User, Category} = require('../../db/models')
const router = express.Router();


router.post('/', asyncHandler(async (req, res)=> {
    const {name, description, creatorId, categoryId } = req.body
    const drink = await Drink.makeDrink( {name, description, creatorId, categoryId })
    return res.json(drink)

}))

router.get('/', asyncHandler(async (req, res)=> {
    let allDrinks = await Drink.findAll()
   return res.json(allDrinks)
}))

router.get('/:id(\\d+)', asyncHandler( async (req,res)=> {
    const {id} = req.params
    const drink = await Drink.findOne({
        where:{id},
        include: [
            {model: Category, attributes: ['name']} ,
            {model: User, attributes: ['username']} ,
        ]
    })
    let averageRes = await Review.getDrinkRating(id)

    drink.dataValues.avg = averageRes
    drink.dataValues.count = await Review.getReviewCount(id)
    return res.json(drink)
}))

router.delete('/:id(\\d+)', asyncHandler( async (req,res)=> {

    const {id} = req.body

    const drink = await Drink.findDestroy(parseInt(id))
    return res.json(drink)
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res)=> {

    const {name, description, categoryId, id } = req.body
    const drink = await Drink.update( {id, name, description,categoryId })

    return res.json(drink)
}))

module.exports = router
