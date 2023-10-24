import { UserHandler } from "../handlers/user-handler"
import { Service, Container } from "typedi";

import express, {Request, Response} from "express";

@Service()
export  class UserController {
    userHandler : UserHandler;

    constructor(){
        this.userHandler = Container.get(UserHandler);
    }


    async createUser(req:Request, res: Response){
       const response = await  this.userHandler.createUser();
       console.log(response);
       res.send("hello salik");
    }

}