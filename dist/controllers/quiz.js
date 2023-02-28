"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuiz = exports.getQuizes = exports.saveDraft = exports.createQuiz = void 0;
const Draft_1 = require("../models/Draft");
const Quiz_1 = require("../models/Quiz");
const createQuiz = async (req, res) => {
    const quiz = req.body;
    try {
        const createQuiz = await Quiz_1.Quiz.create(quiz);
        if (!createQuiz) {
            return res.status(500).json({
                success: false,
                errors: ["500: internal server error"],
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            errors: null,
            data: { message: "created a quiz" },
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            errors: [error.name, error.message],
            data: null,
        });
    }
};
exports.createQuiz = createQuiz;
const saveDraft = async (req, res) => {
    const quiz = req.body;
    try {
        const createQuiz = await Draft_1.DraftedQuiz.create(quiz);
        if (!createQuiz) {
            return res.status(500).json({
                success: false,
                errors: ["Couldn't create a quiz"],
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            errors: null,
            data: { message: "quiz saved in draft" },
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            errors: [error.name, error.message],
            data: null,
        });
    }
};
exports.saveDraft = saveDraft;
const getQuizes = async (req, res) => {
    try {
        const quiz = await Quiz_1.Quiz.find();
        if (!quiz)
            return res.status(400).json({
                success: false,
                errors: ["Not found"],
                data: null,
            });
        return res.status(200).json({
            success: true,
            errors: null,
            data: quiz,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            errors: [error.name, error.message],
            data: null,
        });
    }
};
exports.getQuizes = getQuizes;
const getQuiz = async (req, res) => {
    const quizId = req.params.id;
    try {
        const quiz = await Quiz_1.Quiz.findById(quizId);
        if (!quiz)
            return res.status(400).json({
                success: false,
                errors: ["Not found"],
                data: null,
            });
        return res.status(200).json({
            success: true,
            errors: null,
            data: quiz,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            errors: [error.name, error.message],
            data: null,
        });
    }
};
exports.getQuiz = getQuiz;
