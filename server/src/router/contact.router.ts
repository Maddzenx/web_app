import express, { Request, Response} from "express";
import * as ContactService from "../service/contact.service";

import { Contact } from "../model/contact.interface";

export const contactRouter = express.Router();

contactRouter.get("/", async (req: Request, res: Response) => {
    try {
        const contacts : Array<Contact> = await ContactService.getContact();

        res.status(200).send(contacts);

    } catch (e : any) {
   
    res.status(500).send(e.message);
    }
   
   });

   contactRouter.put("/", async (req: Request, res: Response) => {

    try {
   
    const name: string = req.body.name;
   
   
   
    if (! name) {
   
    res.status(400).send("Missing name\n");
   
    return;
   
    }

    const company: string = req.body.company;
   
   
   
    if (! company) {
   
    res.status(400).send("Missing company\n");
   
    return;
   
    }

    const position: string = req.body.position;
        
    if (! position) {
    
    res.status(400).send("Missing position\n");
    
    return;
    
    }
   
    const telephoneNumber: string = req.body.telephoneNumber;
        
    if (! telephoneNumber) {
    
    res.status(400).send("Missing telephoneNumber\n");
    
    return;
    
    }

    const email: string = req.body.email;
        
    if (! email) {
    
    res.status(400).send("Missing email\n");
    
    return;
    
    }

    const comment: string = req.body.comment;
        
    if (! comment) {
    
    res.status(400).send("Missing comment\n");
    
    return;
    
    }
   
    const contact : Contact = await ContactService.createContact(name, company, position, telephoneNumber, email, comment);
   
    res.status(201).send(contact);
   
    } catch (e : any) {
   
    res.status(500).send(e.message);
   
    }
   
   });



contactRouter.put("/:id", async (req : Request, res: Response) => {

try {

const id : number = parseInt(req.params.id, 10);



if (! req.body.done) {

res.status(400).send("Bad call to /contact/:id\n");

}


const completed : boolean = await ContactService.markSuccess(id);

if (! completed) {

res.status(400).send(`No task with id ${id}\n`);

}



res.status(200).send("Task set to done\n");

} catch (e : any) {

res.status(500).send(e.message);

}

});

