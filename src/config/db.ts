import mongoose from "mongoose";
// const pusher = require("../config/pusher");

export const connectDB = async () => {
	await mongoose
		.connect(
			"mongodb+srv://quiz:quiz@cluster0.8iajr.mongodb.net/quizapp?retryWrites=true&w=majority",
			{
				// useNewUrlParser: true,
				// useUnifiedTopology: true,
				// useCreateIndex: true,
				// useFindAndModify: false,
			} as any,
		)
		.then(() => console.log("Database connected"));
};
