"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const app = (0, express_1.default)();
// Database
(0, db_1.connectDB)();
app.use(express_1.default.json());
app.use("/api", require("./routes/quizRoute"));
app.get("/", (_req, res) => {
    res.status(201).json({
        message: "Welcome to API",
    });
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server running..."));
