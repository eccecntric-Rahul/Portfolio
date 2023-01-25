import express from "express";
import postEducation,{ postExperience, postPersonalDetails, postProject, postSkill, postTraining } from "../controllers/post.controller";
const router =express.Router();

router.post("/education",postEducation);
router.post("/experience",postExperience);
router.post("/details",postPersonalDetails);
router.post("/skill",postSkill);
router.post("/training",postTraining);
router.post("/project",postProject);

module.exports= router;