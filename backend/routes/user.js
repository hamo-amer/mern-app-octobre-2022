const express=require('express')
const { addUser, getAllUsers, deleteUser, updateUser, getOneUser } = require('../controllers/userController')
const router=express.Router()

//# create new user
//# method POST
//# req.body
router.post('/adduser',addUser)
//# get all users
//# method GET
router.get('/allusers',getAllUsers)
//# delete user by id
//# method DELETE
//# req.params
router.delete('/:id',deleteUser)
//# update user by id
//# method PUT
//# req.params
//# req.body
router.put('/:id',updateUser)
//# get user by id
//# method GET
//# req.params
router.get('/getuser/:id',getOneUser)

module.exports=router