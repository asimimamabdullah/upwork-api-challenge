import express from "express";
import { createQuiz, getQuizes, getQuiz, saveDraft } from "../controllers/quiz";
const router = express.Router();

router.route("/quiz").get(getQuizes);

router.route("/quiz").post(createQuiz);

router.route("/quiz/:id").get(getQuiz);

router.route("/draft-quiz").post(saveDraft);

module.exports = router;
