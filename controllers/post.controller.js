import EducationModel from "../model/EducationSchema";
import ExperienceModel from "../model/ExperienceSchema";
import PersonalDetailsModel from "../model/PersonalDetailsSchema";
import ProfileModel from "../model/ProfileSchema";
import ProjectModel from "../model/ProjectSchema";
import ReviewSchema from "../model/ReviewSchema";
import SkillModel from "../model/SkillModel";
import TrainingModel from "../model/TrainingSchema";

const postEducation= async (req,res)=>{
    try{
        const response = await EducationModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}
export const postExperience= async (req,res)=>{
    try{
        const response = await ExperienceModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const postPersonalDetails= async (req,res)=>{
    try{
        const response = await PersonalDetailsModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const postProject= async (req,res)=>{
    try{
        const response = await ProjectModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const postSkill= async (req,res)=>{
    try{
        const response = await SkillModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const postTraining= async (req,res)=>{
    try{
        const response = await TrainingModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const postProfile= async (req,res)=>{
    try{
        const response = await ProfileModel.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const postReview= async (req,res)=>{
    try{
        const response = await ReviewSchema.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export default postEducation;