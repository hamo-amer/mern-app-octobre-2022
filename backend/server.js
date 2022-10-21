require('dotenv').config()
const express=require('express')
const app=express()
const connectDB=require('./config/connection')
const userRoute=require('./routes/user')
const PORT =process.env.PORT || 5000

// connect server with mongodb
connectDB()
// middleware
app.use(express.json())
app.use('/api/users',userRoute)


app.listen(PORT,()=>console.log(`server running on port ${PORT}`))