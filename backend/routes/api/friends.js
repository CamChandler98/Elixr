const express = require('express')
const asyncHandler = require('express-async-handler');
const {Drink, Review, User, Category, Request, Friend} = require('../../db/models')
const { Op } = require('sequelize');


const router = express.Router();


router.get('/:userId', asyncHandler( async (req,res) => {
    let {userId} = req.params
    let friends = await Friend.getUserFriends(userId)
    res.json(friends)

} ))

module.exports = router
