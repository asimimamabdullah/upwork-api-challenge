import { Schema, model, SchemaOptions } from "mongoose";

const optionsSchema = new Schema({
	title: {
		type: String,
	},
	isTrue: {
		type: Boolean,
	},
});
const questionsSchema: SchemaOptions = new Schema({
	title: {
		type: String,
	},
	mandatory: {
		type: Boolean,
		default: false,
	},
	options: [optionsSchema],
});

const quizSchema = new Schema({
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

export const DraftedQuiz = model("DraftedQuiz", quizSchema);
