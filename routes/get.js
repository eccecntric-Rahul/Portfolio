import express from "express";
import getEducation, { getExperience, getPersonalDetails, getProfile, getProject, getReview, getSkill, getTraining } from "../controllers/get.controller";
const router =express.Router();

router.get("/education",getEducation);
router.get("/experience",getExperience);
router.get("/details",getPersonalDetails);
router.get("/skill",getSkill);
router.get("/training",getTraining);
router.get("/project",getProject);
router.get("/profile",getProfile);
router.get("/review",getReview);

module.exports= router;