import express, {
	Errback,
	ErrorRequestHandler,
	NextFunction,
	Request,
	Response,
} from "express";
import { connectDB } from "./config/db";
const app = express();

// Database
connectDB();

app.use(express.json());

app.use("/api", require("./routes/quizRoute"));

const port = 5000;
app.listen(port, () => console.log("server running..."));
