import express from "express";
import connectDb from "./app/config/db.js";

const app = express();
connectDb();

app.use(express.json());


export default app;