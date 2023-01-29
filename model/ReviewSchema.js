import mongoose from "mongoose";
const {Schema}= mongoose;

const reviewSchema= new Schema({
    guestName: {
        type: String,
        required: "name is required",
        trim: true,
        
    },
    comment: {
        type: String,
        trim: true,
    }, 
    email:{
        type:String,
        trim:true,
        lowercase: true,
        unique:'This email already exists',
    },
    like:{
        type:Boolean,
        default:true
    }   
});


export default mongoose.model("review",reviewSchema);