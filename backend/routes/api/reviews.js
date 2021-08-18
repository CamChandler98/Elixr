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


    let imageUrl
    try{
       imageUrl = await singlePublicFileUpload(req.file)
    }catch{
        imageUrl = null
    }

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

router.put('/:reviewId' , singleMulterUpload("image"),asyncHandler(async (req,res)=> {
    let {reviewId} = req.params

    let {content, rating, removeImg} = req.body

    let imageUrl = await singlePublicFileUpload(req.file)
    console.log(reviewId)
    let review = await Review.findByPk(reviewId)
    console.log(review.content)
    review.content = content || review.content
    review.rating = rating || review.rating
    if(removeImg === 'yes'){
        review.imageUrl = null
    }else{
        review.imageUrl = imageUrl || review.imageUrl
    }

    await review.save()

    let updatedReview = await Review.findOne({
        where:{
            id: review.id
          },
          include: [
            {model: Drink, attributes: ['name']} ,
            {model: User, attributes: ['username']} ,
        ]
    })

    return res.json(updatedReview)

}))

router.delete('/:reviewId' , asyncHandler( async (req,res) => {
    let {reviewId} = req.params

    let review = await Review.findByPk(reviewId)

    await review.destroy()

    return res.json(review)
}))

router.get('/:reviewId' ,asyncHandler( async (req,res) => {
    let {reviewId} = req.params

     let review = await Review.findOne({
        where:{
            id: reviewId
          },
          include: [
            {model: Drink, attributes: ['name']} ,
            {model: User, attributes: ['username']} ,
        ]
    })

    return res.json(review)
}))




module.exports = router
