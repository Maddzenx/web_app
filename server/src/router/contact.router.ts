import Express, { Request, Response} from "express";
import { Contact } from "../model/contact.interface";
import { IContactService } from "../service/icontact.service";


export function makeContactRouter(ContactService : Promise<IContactService>): Express.Express {
    const contactRouter: Express.Express = Express();

    contactRouter.get("/", async (req: Request, res: Response) => {
        try {
            const c = await ContactService;
            const contacts : Array<Contact> = await c.getContact();

            res.status(200).send(contacts);

        } catch (e : any) {
    
        res.status(500).send(e.message);
        }
    
    });

    /** test */

    contactRouter.post("/", async (req: Request, res: Response) => {

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
    
        const c = await ContactService;
        const contact : Contact = await c.createContact(name, company, position, telephoneNumber, email, comment);
    
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

        const status: number = req.body.status;
            
        if (! status) {
        
        res.status(400).send("Missing status\n");
        
        return;
        
        }

        const comment: string = req.body.comment;
            
        if (! comment) {
        
        res.status(400).send("Missing comment\n");
        
        return;
        
        }
    
        const c = await ContactService;
        const contact : Contact = await c.editContact(id, name, company, position, telephoneNumber, email, status, comment);
    
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

            const c = await ContactService;
            const contact : Boolean = await c.deleteContact(id);

        res.status(201).send(contact);
    
        } catch (e : any) {
    
        res.status(500).send(e.message);
    
        }

    });

        //Checking changestatus
        contactRouter.put("/:id, status", async (req : Request, res: Response) => {

            try {
            
            const id : number = parseInt(req.params.id, 10);
            const status : number = parseInt(req.params.status, 4);
            
            
            if (! req.body.status[status]) {
            
            res.status(400).send("Bad call to /contact/:id\n");
            
            }
            
            const c = await ContactService;
            const noAnswer : Contact = await c.changeStatus(id, status);
            
            if (! noAnswer) {
            
            res.status(400).send(`Status is not no answer ${id}\n`);
            
            }
            
            
            
            res.status(200).send("Status set\n");
            
            } catch (e : any) {
            
            res.status(500).send(e.message);
            
            }
            
            });
            return contactRouter;
        }