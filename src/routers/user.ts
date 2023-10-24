import express, { Request, Response, Router } from "express";
import { UserController } from "../api/controllers/user";
import { Container,Service, Inject } from "typedi";

@Service()
class UserRouter {
  public userRouter: Router;
   userController: UserController;

  constructor() {
    this.userController = Container.get(UserController);
    this.userRouter = express.Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.userRouter.get("/usercreate", this.loginHandler);
  }

  private loginHandler = async (req: Request, res: Response) =>  {

    await this.userController.createUser(req,res);
  };
}

export default new UserRouter().userRouter;
