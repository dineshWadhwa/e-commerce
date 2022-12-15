import express from "express";
import connection from "./db/connect.js";
import router from "./routes/Router.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = 9000;

// app.get('/',(req,res)=>{
//     res.status(201).json('server created')
// })

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);


connection();
app.listen(port,()=>{
    console.log(`server start at port no : ${port}`)
}) 