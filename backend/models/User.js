const mongoose=require('mongoose')
const userShema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:Number,
    gender:{
        type:String,
        required:true
    },
    birthday:{
        type:Date
    }
},
{
  timestamps:true  
}
)
module.exports=mongoose.model('User',userShema)