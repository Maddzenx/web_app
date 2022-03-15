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
            /*    Denna säkerhets krypteringen fungerar inte av någon anledning
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(password, salt);
            */

            
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

            // KOLLA UPP OM DETTA SKA MED !!!
             /*
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.password, salt);
            */
            //const { password, ...others } = success._doc;
            //res.status(200).send(success);

        } catch (e: any) {
            res.status(500).send(e.message);
        }

    });


    /*   //LOGIN
       userRouter.post("/login", async (req: Request, res: Response) => {
           try {
               const user = await User.findOne({ username: req.body.username });
               !user && res.status(400).json("Wrong credentials!");
     
               const validated = await bcrypt.compare(req.body.password, user.password);
               !validated && res.status(400).json("Wrong credentials!");
     
               const { password, ...others } = user._doc;
               res.status(200).json(others);
           } catch (err) {
               res.status(500).json(err);
           }
       });
     
       //UPDATE
       userRouter.put("/:id", async (req: Request, res: Response) => {
           if (req.body.userId === req.params.id) {
               if (req.body.password) {
                   const salt = await bcrypt.genSalt(10);
                   req.body.password = await bcrypt.hash(req.body.password, salt);
               }
               try {
                   const updatedUser = await User.findByIdAndUpdate(
                       req.params.id,
                       {
                           $set: req.body,
                       },
                       { new: true }
                   );
                   res.status(200).json(updatedUser);
               } catch (err) {
                   res.status(500).json(err);
               }
           } else {
               res.status(401).json("You can update only your account!");
           }
       });
     
       //DELETE
       userRouter.delete("/:id", async (req: Request, res: Response) => {
           if (req.body.userId === req.params.id) {
               try {
                   const user = await User.findById(req.params.id);
                   try {
                       await userRouter.post.deleteMany({ username: user.username });
                       await User.findByIdAndDelete(req.params.id);
                       res.status(200).json("User has been deleted...");
                   } catch (err) {
                       res.status(500).json(err);
                   }
               } catch (err) {
                   res.status(404).json("User not found!");
               }
           } else {
               res.status(401).json("You can delete only your account!");
           }
       });
     
       //GET USER
       userRouter.get("/:id", async (req: Request, res: Response) => {
           try {
               const user = await User.findById(req.params.id);
               const { password, ...others } = user._doc;
               res.status(200).json(others);
           } catch (err) {
               res.status(500).json(err);
           }
       });*/

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