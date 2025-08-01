const express = require('express');
const { userAuth } = require('../middleware/auth');
const { User } = require('../models/user');
const userRouter = express.Router()


userRouter.get('/getUser', userAuth, async(req, res)=>{
   try {
        const user = req.user;
        res.status(200).send("User : " + user)
    } catch (error) {
        res.status(400).send("Error:" + error.message)
    }
})
userRouter.get('/getAllUsers', userAuth,  async(req, res)=>{
   try {
    const user = await User.find({})
     res.send({
        message: "Get all users successfully",
        data: user
     })
   } catch (error) {
    res.status(400).send(error)
}})

userRouter.post('/addUser',  async (req, res)=>{
    res.send("Add User Successful")
})
userRouter.patch('/editUser',  async (req, res)=>{
    res.send("Edit User Successful")
})
userRouter.post('/deleteUser',  async (req, res)=>{
    res.send("Delete User Successful")
})


module.exports = {
    userRouter
}