import mongoose from "mongoose";
const {Schema}= mongoose;

const trainingSchema= new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
        
    },
    description: {
        type: String,
        trim: true,
        required:'training is required',
    },
    image:{
        type:String,
        trim:true,
    }
    
});


export default mongoose.model("training",trainingSchema);