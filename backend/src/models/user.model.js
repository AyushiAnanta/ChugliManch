import mongoose,{Schema} from "mongoose";
const userSchema = new Schema({

    username :{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index: true
    },
     name :{
        type:String,
        required:true,
        index: true
    },
     email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index: true
    },
    avatar:{
        type:String
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },

    refresh_Token:{
    type:String
    },
    phoneNo:{
        type:String
    },
    preferredLanguage:{
        type:String
    },
    OAuth:{
        type:String
    },
    role:{
        type:String
    },

},
{
    timestamps:true
})


export const User = mongoose.model("User",userSchema)