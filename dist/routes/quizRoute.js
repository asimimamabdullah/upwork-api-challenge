"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quiz_1 = require("../controllers/quiz");
const router = express_1.default.Router();
router.route("/quiz").get(quiz_1.getQuizes);
router.route("/quiz").post(quiz_1.createQuiz);
router.route("/quiz/:id").get(quiz_1.getQuiz);
router.route("/draft-quiz").post(quiz_1.saveDraft);
module.exports = router;
