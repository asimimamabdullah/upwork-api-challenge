"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftedQuiz = void 0;
const mongoose_1 = require("mongoose");
const optionsSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    isTrue: {
        type: Boolean,
    },
});
const questionsSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    mandatory: {
        type: Boolean,
        default: false,
    },
    options: [optionsSchema],
});
const quizSchema = new mongoose_1.Schema({
    drafted: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    questions: [questionsSchema],
});
exports.DraftedQuiz = (0, mongoose_1.model)("DraftedQuiz", quizSchema);
