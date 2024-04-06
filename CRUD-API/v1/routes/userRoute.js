const express = require('express')
const userController = require('../controller/userController')
// import express from 'express'

const router = express.Router()

router.post('/create', userController.create)
router.get('/getData', userController.getData)
router.put('/updateData/:id', userController.updateData)
router.delete('/deleteData/:id', userController.deleteData)
router.get('/editData/:id', userController.editData)
router.post('/register', userController.register)
router.post('/login', userController.login)

// export default express

module.exports = router