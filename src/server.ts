import 'reflect-metadata';
import express, { Express, Request, Response} from "express";
import  userRouter  from "./routers/user"
import dbConnection from './repositories/db-configure.mssqlNodev8';
import connection from './repositories/tedious.connections';
// import sequelize from './repositories/db_configure';
const sql=require('mssql')
const port = 3000;

const app = express(); 
// dbConnection();
connection.connect();
app.use("/user",userRouter)


app.listen(port, () =>{
    console.log(`now listening ${port}`);
})