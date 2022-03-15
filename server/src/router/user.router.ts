import Express, { Request, Response } from "express";
import { CallList } from "../model/callList.interface";
import { User } from "../model/user.interface";
import { IUserService } from "../service/iuser.service";
import { userDBService } from "../service/userdb.service";

export function makeUserRouter(userService: IUserService): Express.Express {
    const userRouter: Express.Express = Express();
    const bcrypt = require("bcrypt");

    //Create user
    userRouter.post("/register", async (req: Request, res: Response) => {

        try {
            const username: string = req.body.username;
            const email: string = req.body.email;
            const password: string = req.body.password;
            if (!username) {
                res.status(400).send("Missing username\n");
                return;
            }

            if (!email) {
                res.status(400).send("Missing email\n");
                return;
            }
            if (!password) {
                res.status(400).send("Missing password\n");
                return;

            }
           

            const user: User = await userService.createUser(username, email, password);
            res.status(201).send(user);

        } catch (e: any) {
            res.status(500).send(e.message);
        }
    });

    //Log in user
    userRouter.post("/login", async (req: Request, res: Response) => {
        try {
            const username: string = req.body.username;
            const password: string = req.body.password;
            if (!username) {
                res.status(400).send("Missing email\n");
                return;
            }

            if (!password) {
                res.status(400).send("Missing password\n");
                return;
            }

            const user: User = await userService.logInUser(username, password);
            res.status(201).send(user);



        } catch (e: any) {
            res.status(500).send(e.message);
        }

    });


    //get user
    userRouter.get("/getUser", async (req: Request, res: Response) => {
        try {
            const user: User[] = await userService.getUser();
            res.status(201).send(user);
        } catch (e: any) {
            res.status(500).send(e.message);

        }
    });

    return userRouter;
}

export function userRouter(): Express.Express {
    return makeUserRouter(userDBService);
}