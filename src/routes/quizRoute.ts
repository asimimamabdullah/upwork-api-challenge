import express from "express";
import { createQuiz, getQuizes } from "../controllers/quiz";
const router = express.Router();

router.route("/quiz").get(getQuizes);

router.route("/quiz").post(createQuiz);

router.route("/api/quiz/:id").patch();

router.route("/api/quiz/:id").delete();

module.exports = router;
