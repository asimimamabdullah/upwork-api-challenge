import { Request, Response } from "express";
import { DraftedQuiz } from "../models/Draft";
import { Quiz } from "../models/Quiz";

const createQuiz = async (req: Request, res: Response) => {
	const quiz = req.body;
	try {
		const createQuiz = await Quiz.create(quiz);
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
	} catch (error: any) {
		return res.status(500).json({
			success: false,
			errors: [error.name, error.message],
			data: null,
		});
	}
};
const saveDraft = async (req: Request, res: Response) => {
	const quiz = req.body;
	try {
		const createQuiz = await DraftedQuiz.create(quiz);
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
	} catch (error: any) {
		return res.status(500).json({
			success: false,
			errors: [error.name, error.message],
			data: null,
		});
	}
};

const getQuizes = async (req: Request, res: Response) => {
	try {
		const quiz = await Quiz.find();

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
	} catch (error: any) {
		res.status(400).json({
			success: false,
			errors: [error.name, error.message],
			data: null,
		});
	}
};

const getQuiz = async (req: Request, res: Response) => {
	const quizId = req.params.id;

	try {
		const quiz = await Quiz.findById(quizId);

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
	} catch (error: any) {
		res.status(400).json({
			success: false,
			errors: [error.name, error.message],
			data: null,
		});
	}
};

export { createQuiz, saveDraft, getQuizes, getQuiz };
