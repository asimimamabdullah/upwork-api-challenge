"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const mongoose_1 = require("mongoose");
const optionsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    isTrue: {
        type: Boolean,
        required: true,
    },
});
const questionsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    mandatory: {
        type: Boolean,
        required: true,
        default: false,
    },
    options: [optionsSchema],
});
const quizSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    questions: [questionsSchema],
});
exports.Quiz = (0, mongoose_1.model)("Quiz", quizSchema);
