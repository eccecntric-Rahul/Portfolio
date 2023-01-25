import mongoose from "mongoose";
const {Schema}= mongoose;

const educationSchema= new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
        
    },
    description: {
        type: String,
        required: "description is required",
        trim: true,
    
    },
    marks: {
        type: String,
        trim: true,
        required: "marks are required",
    },
    
});


export default mongoose.model("employee",educationSchema);