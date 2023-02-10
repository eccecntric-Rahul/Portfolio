import EducationModel from "../model/EducationSchema";
import ExperienceModel from "../model/ExperienceSchema";
import PersonalDetailsModel from "../model/PersonalDetailsSchema";
import PhotosSchema from "../model/PhotosSchema";
import ProfileModel from "../model/ProfileSchema";
import ProjectModel from "../model/ProjectSchema";
import ReviewSchema from "../model/ReviewSchema";
import SkillModel from "../model/SkillModel";
import TrainingModel from "../model/TrainingSchema";
import nodemailer from 'nodemailer';

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
        const testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: testAccount.user, // generated ethereal user
              pass: testAccount.pass, // generated ethereal password
            },
          });
          const text = `Name - ${req.fields.guestName}
          Review - ${req.fields.comment}
          Liked - ${req.fields.like==true?"Yes":"No"}`
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: '"TechRahul" <techrahul.com>', // sender address
            to: "rk2655415@gmail.com ,mokshitakhurana1998@gmail.com", // list of receivers
            subject: "New Review Posted on TechRahul!", // Subject line
            text: text, // plain text body
            html: "<b></b>", // html body
          });
        
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export const postPhotos= async (req,res)=>{
    try{
        const response = await PhotosSchema.create({...req.fields});
        return res.status(200).send(response);
    }catch(err){
        console.log(err)
        return res.status(400).send('error occured')
    }
}

export default postEducation;