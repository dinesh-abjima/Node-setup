import 'reflect-metadata';
import express, { Express, Request, Response} from "express";
import  userRouter  from "./routers/user"

const port = 3000;


const app = express();

app.use("/user",userRouter)



app.listen(port, () =>{
    console.log(`now listening ${port}`);
})