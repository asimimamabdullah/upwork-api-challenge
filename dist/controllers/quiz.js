"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuizes = exports.saveDraft = exports.createQuiz = void 0;
const Quiz_1 = require("../models/Quiz");
const createQuiz = async (req, res) => {
    console.log("body: ", req.body);
    const quiz = req.body;
    try {
        const createQuiz = await Quiz_1.Quiz.create(quiz);
        if (!createQuiz) {
            return res.status(500).json({
                success: false,
                error: ["500: internal server error"],
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            error: null,
            data: { message: "created a quiz" },
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: [error.name, error.message],
            data: null,
        });
    }
};
exports.createQuiz = createQuiz;
const saveDraft = (req, res) => {
    console.log("body: ", req.body);
    const quiz = req.body;
};
exports.saveDraft = saveDraft;
const getQuizes = async (req, res) => {
    try {
        const quiz = await Quiz_1.Quiz.find();
        if (!quiz)
            return res.status(400).json({
                success: false,
                error: ["Not found"],
                data: null,
            });
        return res.status(200).json({
            success: true,
            error: null,
            data: quiz,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: [error.name, error.message],
            data: null,
        });
    }
};
exports.getQuizes = getQuizes;
