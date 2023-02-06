import mongoose from "mongoose";
const {Schema}= mongoose;

const trainingSchema= new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
        
    },
    location: {
        type: String,
        trim: true,
        required: "location are required",
    },
    duration:{
        type: String,
        trim: true,
        required: "duration are required",
    },
    description: {
        type: String,
        trim: true,
        required:'training is required',
    },
    image:{
        type:String,
        trim:true,
    },
    From:{
        type:String,
    },
    matched:{
        type:String,
        trim:true,
        default:'98'
    },
    liked:{
     type:Boolean,
     default:false,
    },
    orderId:{
        type:Number,
        required:true,
    },
    bgColor:{
        type:String,
    },
    image:{
        type:String,
        required:true
    },
    training:{
        type:Boolean,
        default:true,
    },
    jobType:{
        type:String,
        required:true
    },
    goToLink:{
        type:String,
    }
    
    
});


export default mongoose.model("training",trainingSchema);