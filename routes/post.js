import express from "express";
import postEducation,{ postExperience, postPersonalDetails, postProfile, postProject, postReview, postSkill, postTraining } from "../controllers/post.controller";
const router =express.Router();

router.post("/education",postEducation);
router.post("/experience",postExperience);
router.post("/details",postPersonalDetails);
router.post("/skill",postSkill);
router.post("/training",postTraining);
router.post("/project",postProject);
router.post("/profile",postProfile);
router.post("/review",postReview);

module.exports= router;