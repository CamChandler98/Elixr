const express = require('express')
const asyncHandler = require('express-async-handler');
const {Review} = require('../../db/models')

const router = express.Router();

router.get('/drinks/:drinkId', asyncHandler(async (req,res)=>{
    let {drinkId} = req.params
    let reviews = await Review.getDrinkReviews(drinkId)
    
    res.json(reviews)
}))

module.exports = router
