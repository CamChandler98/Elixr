const express = require('express')
const asyncHandler = require('express-async-handler');
const {Review, User, Drink} = require('../../db/models')

const router = express.Router();


router.get('/drinks/:drinkId', asyncHandler(async (req,res)=>{
    let {drinkId} = req.params
    let reviews = await Review.findAll({
        where:{
            drinkId
          },
          include: [
            {model: Drink, attributes: ['name']} ,
            {model: User, attributes: ['username']} ,
        ]
    })
    res.json(reviews)
}))



module.exports = router
