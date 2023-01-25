import express from "express";
import getEducation, { getExperience, getPersonalDetails, getProject, getServer, getSkill, getTraining } from "../controllers/get.controller";
const router =express.Router();

router.get("/education",getEducation);
router.get("/experience",getExperience);
router.get("/details",getPersonalDetails);
router.get("/skill",getSkill);
router.get("/training",getTraining);
router.get("/project",getProject);

module.exports= router;