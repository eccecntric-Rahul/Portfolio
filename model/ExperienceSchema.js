import mongoose from "mongoose";
const {Schema}= mongoose;

const experienceSchema= new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
        
    },
    designation:{
        type:String,
        required: "designation is required",
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    locaion: {
        type: String,
        trim: true,
        required: "location are required",
    },
    duration:{
        type: String,
        trim: true,
        required: "duration are required",
    },

    
});


export default mongoose.model("experience",experienceSchema);