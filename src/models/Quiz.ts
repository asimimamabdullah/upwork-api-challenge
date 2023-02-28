import { Schema, model, SchemaOptions } from "mongoose";

const optionsSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	isTrue: {
		type: Boolean,
		required: true,
	},
});
const questionsSchema: SchemaOptions = new Schema({
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

const quizSchema = new Schema({
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

export const Quiz = model("Quiz", quizSchema);
