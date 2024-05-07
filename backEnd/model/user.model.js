import mongoes, { Types } from "mongoose";

const userSchema = mongoes.Schema({

    fullname:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required: true,
        unique: true
    },
    
    password:{
        type:String,
        required:true
    },

})

const User = mongoes.model("User",userSchema)

export default User;