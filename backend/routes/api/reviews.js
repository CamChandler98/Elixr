const express = require('express')
const asyncHandler = require('express-async-handler');
const {Review, User, Drink} = require('../../db/models')
const {singlePublicFileUpload , singleMulterUpload} = require('../../awsS3')

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


router.get('/users/:userId', asyncHandler(async (req,res)=>{
    let {userId} = req.params
    let reviews = await Review.findAll({
        where:{
            userId
          },
          include: [
            {model: Drink, attributes: ['name']} ,
            {model: User, attributes: ['username']} ,
        ]
    })
    res.json(reviews)
}))

router.post('/' , singleMulterUpload("image"),asyncHandler(async (req,res)=> {
    let {userId, drinkId, content, rating} = req.body


    console.log('user',userId, 'drink', drinkId)
    let imageUrl = await singlePublicFileUpload(req.file)

    const newReview = await Review.create({userId,drinkId,content,rating,imageUrl})

    let review = await Review.findOne({
        where:{
            id: newReview.id
          },
          include: [
            {model: Drink, attributes: ['name']} ,
            {model: User, attributes: ['username']} ,
        ]
    })

    return res.json(review)

}))



module.exports = router