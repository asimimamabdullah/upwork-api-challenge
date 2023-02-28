import mongoose from "mongoose";

export const connectDB = async () => {
	await mongoose
		.connect(
			"mongodb+srv://quiz:quiz@cluster0.8iajr.mongodb.net/quizapp?retryWrites=true&w=majority",
		)
		.then(() => console.log("Database connected"));
};
