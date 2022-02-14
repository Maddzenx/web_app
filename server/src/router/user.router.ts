import express, { Request, Response} from "express";
import { CallList } from "../model/callList.interface";
import { User } from "../model/user.interface";

export const userRouter = express.Router();


userRouter.put("/", async (req: Request, res: Response) => {

    try {
   
    const username: string = req.body.username;
   
   
    if (! username) {
   
    res.status(400).send("Missing username\n");
   
    return;
   
    }

    const email: string = req.body.email;
   
   
   
    if (! email) {
   
    res.status(400).send("Missing email\n");
   
    return;
   
    }

    const password: string = req.body.password;
        
    if (! password) {
    
    res.status(400).send("Missing password\n");
    
    return;
    
    }
   
    const callLists: Array<CallList> = req.body.callLists;
        
    if (! callLists) {
    
    res.status(400).send("Missing callLists\n");
    
    return;
    
    }
   
    const user : User = await userRouter.createUser(username, email, password, callLists);
   
    res.status(201).send(user);
   
    } catch (e : any) {
   
    res.status(500).send(e.message);
   
    }
   
   });