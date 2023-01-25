import mongoose from "mongoose";
const {Schema}= mongoose;

const projectSchema= new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
        
    },
    description: {
        type: String,
        trim: true,
        required:"description is required",
    }, 
    projectLink:{
        type:String,
        trim:true,
    }   
});


export default mongoose.model("project",projectSchema);