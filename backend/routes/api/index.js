const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const drinksRouter = require('./drinks')
const categoriesRouter = require('./category')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/drinks',drinksRouter)

router.use('/categories',categoriesRouter)


module.exports = router;
