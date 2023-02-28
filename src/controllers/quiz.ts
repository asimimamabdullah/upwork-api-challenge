import { Request, Response } from "express";
import { Quiz } from "../models/Quiz";

const createQuiz = async (req: Request, res: Response) => {
	console.log("body: ", req.body);

	const quiz = req.body;
	try {
		const createQuiz = await Quiz.create(quiz);
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
	} catch (error: any) {
		return res.status(500).json({
			success: false,
			error: [error.name, error.message],
			data: null,
		});
	}
};
const saveDraft = (req: Request, res: Response) => {
	console.log("body: ", req.body);
	const quiz = req.body;
};

const getQuizes = async (req: Request, res: Response) => {
	try {
		const quiz = await Quiz.find();

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
	} catch (error: any) {
		res.status(400).json({
			success: false,
			error: [error.name, error.message],
			data: null,
		});
	}
};

export { createQuiz, saveDraft, getQuizes };
