import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleWare } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path: "./data/config.env",
})

//using middleware
app.use(express.json()); //bcoz whenver we post something from mpostman it is neccessary other wise req.body will give uf 
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","DELETE","PUT"],
    credentials: true, //frontend pr headers phochane ke liye like cookies etc
})); //can passs patams like which url can access, which operations it can perform etc

//using routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);


app.get("/",(req,res)=>{
    res.send("Nice Working")
})

//using error middleware
app.use(errorMiddleWare);
