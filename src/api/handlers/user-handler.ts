import sequelize from "../../repositories/db_configure";
import { UserService } from "../../services/user-service";
import { Service, Inject } from "typedi";
@Service()
export class UserHandler {
    @Inject()
    userService : UserService;
    

    async createUser(){

        return "called from hendler";
    }

}