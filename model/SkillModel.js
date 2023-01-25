import mongoose from "mongoose";
const {Schema}= mongoose;

const skillSchema= new Schema({
    name: {
        type: String,
        trim: true,
        required: "skill name is required",
        unique:true,
    },
   image:{
       type:String,
       trim:true,
       required:'image is required',
   },
   category:{
       type:String,
       trim:true,
       default:'proficient'
   }
    
});

export default mongoose.model("skill",skillSchema);