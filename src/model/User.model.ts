import mongoose , {Schema , Document} from "mongoose";



export interface Message extends Document{
    content:string,
    createdAt:Date
}
const MessageSchema : Schema<Message> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

export interface User extends Document{
    userName:string,
    email:string,
    password:string,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isAcceptingMessage:boolean,
    message:Message[]
}
const UserSchema : Schema<User> = new Schema({
    userName:{
        type:String,
        required:[true,"username is required"],
    },
    email:{
        type:String,
        required:true,
        maxlength:32,
        minlength:10
    },

})