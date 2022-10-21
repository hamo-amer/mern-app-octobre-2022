const User = require("../models/User")


exports.addUser=async(req,res)=>{
    const {username,email,age,gender,birthday}=req.body
try {
    const founduser=await User.findOne({email})
    if(founduser){
        return res.status(400).json({msg:'user already exists'})
    }
    const user=new User({
        username,email,age,gender,birthday
    })
    await user.save()
    res.status(201).json({msg:"user created",user})
} catch (error) {
    res.status(500).send('server error')
}
}
exports.getAllUsers=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).json({msg:"all users",users})
    } catch (error) {
        res.status(500).send('server error') 
    }
}
exports.deleteUser=async(req,res)=>{
    const {id}=req.params
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({msg:"user deleted"})
    } catch (error) {
        res.status(500).send('server error') 
    }
}
exports.updateUser=async(req,res)=>{
    const {id}=req.params
    try {
       const updateuser= await User.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
        res.status(200).json({msg:"user updated",updateuser})
    } catch (error) {
        res.status(500).send('server error') 
    }
}
exports.getOneUser=async(req,res)=>{
    const {id}=req.params
    try {
     const user=  await User.findById(id)
        res.status(200).json({msg:"user ",user})
    } catch (error) {
        res.status(500).send('server error') 
    }
}