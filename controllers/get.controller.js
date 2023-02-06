import EducationModel from "../model/EducationSchema";
import ExperienceModel from "../model/ExperienceSchema";
import PersonalDetailsModel from "../model/PersonalDetailsSchema";
import ProfileModel from "../model/ProfileSchema";
import ProjectModel from "../model/ProjectSchema";
import ReviewSchema from "../model/ReviewSchema";
import SkillModel from "../model/SkillModel";
import TrainingModel from "../model/TrainingSchema";

const getEducation= async (req,res)=>{
    try{
        const response = await EducationModel.find({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}
export const getExperience= async (req,res)=>{
    try{
        const response = await ExperienceModel.find({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const getPersonalDetails= async (req,res)=>{
    try{
        const response = await PersonalDetailsModel.find({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const getProject= async (req,res)=>{
    try{
        const response = await ProjectModel.find({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const getSkill= async (req,res)=>{
    try{
        const response = await SkillModel.find({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const getTraining= async (req,res)=>{
    try{
        const response = await TrainingModel.find({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const getServer= async (req,res)=>{
    try{
        return res.status(200).send("Server is running !!");
    }catch(err){
        return res.status(400).send('error occured')
    }
}

export const getProfile= async (req,res)=>{
    try{
        const response = await ProfileModel.find({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const getReview= async (req,res)=>{
    try{
        const response = await ReviewSchema.find({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export default getEducation;