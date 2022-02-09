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

   //Checking editContact
   contactRouter.put("/", async (req: Request, res: Response) => {

    try {
   
    const id: number = req.body.id;
    
    if (! id) {
    
    res.status(400).send("Missing id\n");
    
    return;
    
    }
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
   
    const contact : Contact = await ContactService.editContact(id, name, company, position, telephoneNumber, email, status, comment);
   
    res.status(201).send(contact);
   
    } catch (e : any) {
   
    res.status(500).send(e.message);
   
    }
   });

   contactRouter.delete("/:id", async (req : Request, res: Response) => {

    try {
   
        const id: number = req.body.id;
        
        if (! id) {
        
        res.status(400).send("Missing id\n");
        
        return;
        
        }

    const contact : boolean = await ContactService.deleteContact(id);

    res.status(201).send(contact);
   
    } catch (e : any) {
   
    res.status(500).send(e.message);
   
    }

   });


   //Checking markSuccess

contactRouter.put("/:id", async (req : Request, res: Response) => {

try {

const id : number = parseInt(req.params.id, 10);



if (! req.body.status[0]) {

res.status(400).send("Bad call to /contact/:id\n");

}


const success : boolean = await ContactService.markSuccess(id);

if (! success) {

res.status(400).send(`Status is not success ${id}\n`);

}



res.status(200).send("Status set to success\n");

} catch (e : any) {

res.status(500).send(e.message);

}

});

contactRouter.put("/:id", async (req : Request, res: Response) => {

    try {
    
    const id : number = parseInt(req.params.id, 10);
    
    
    
    if (! req.body.status[1]) {
    
    res.status(400).send("Bad call to /contact/:id\n");
    
    }
    
    
    const callLater : boolean = await ContactService.markCallLater(id);
    
    if (! callLater) {
    
    res.status(400).send(`Status is not call later ${id}\n`);
    
    }
    
    
    
    res.status(200).send("Status set to call later\n");
    
    } catch (e : any) {
    
    res.status(500).send(e.message);
    
    }
    
    });

    //Checking markNotIntereste

contactRouter.put("/:id", async (req : Request, res: Response) => {

    try {
    
    const id : number = parseInt(req.params.id, 10);
    
    
    
    if (! req.body.status[2]) {
    
    res.status(400).send("Bad call to /contact/:id\n");
    
    }
    
    
    const notInterested : boolean = await ContactService.markNotInterested(id);
    
    if (! notInterested) {
    
    res.status(400).send(`Status is not not interested ${id}\n`);
    
    }
    
    
    
    res.status(200).send("Status set to not interested\n");
    
    } catch (e : any) {
    
    res.status(500).send(e.message);
    
    }
    
    });

        //Checking markNoAnswer

    contactRouter.put("/:id", async (req : Request, res: Response) => {

        try {
        
        const id : number = parseInt(req.params.id, 10);
        
        
        
        if (! req.body.status[3]) {
        
        res.status(400).send("Bad call to /contact/:id\n");
        
        }
        
        
        const noAnswer : boolean = await ContactService.markNoAnswer(id);
        
        if (! noAnswer) {
        
        res.status(400).send(`Status is not no answer ${id}\n`);
        
        }
        
        
        
        res.status(200).send("Status set to no answer\n");
        
        } catch (e : any) {
        
        res.status(500).send(e.message);
        
        }
        
        });

        //Checking markNoStatus

    contactRouter.put("/:id", async (req : Request, res: Response) => {

        try {
        
        const id : number = parseInt(req.params.id, 10);
        
        
        
        if (! req.body.status[4]) {
        
        res.status(400).send("Bad call to /contact/:id\n");
        
        }
        
        
        const noStatus : boolean = await ContactService.markNoStatus(id);
        
        if (! noStatus) {
        
        res.status(400).send(`Status is not no status ${id}\n`);
        
        }
        
        
        
        res.status(200).send("Status set to no status\n");
        
        } catch (e : any) {
        
        res.status(500).send(e.message);
        
        }
        
        });