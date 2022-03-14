import Express, { Request, Response } from "express";
import { Contact } from "../model/contact.interface";
import { contactDBService } from "../service/contactdb.service";
import { IContactService } from "../service/icontact.service";

export function makeContactRouter(contactService: IContactService): Express.Express {
    const contactRouter: Express.Express = Express();

    contactRouter.get("/:id", async (req: Request, res: Response) => {
        try {
            const callListid: number = Number(req.params.id);

            const c = await contactService;
            const contacts: Array<Contact> = await c.getContact(callListid);

            res.status(200).send(contacts);

        } catch (e: any) {

            res.status(500).send(e.message);
        }

    });

    /** create contact */
    contactRouter.post("/", async (req: Request, res: Response) => {

        try {

            const name: string = req.body.name;

            if (!name) {
                res.status(400).send("Missing name\n");
                return;
            }

            const telephoneNumber: string = req.body.telephoneNumber;

            if (!telephoneNumber) {
                res.status(400).send("Missing telephoneNumber\n");
                return;
            }
            //check if telephone includes only numbers
            if (telephoneNumber.match(/^[0-9]+$/) == null) {
                res.status(400).send("Telephone numbers doesn't contain only digits\n");
                return;
            }
            const callListID: number = req.body.callListID;
            const company: string = req.body.company;
            const position: string = req.body.position;
            const email: string = req.body.email;

            if (!(email.includes("@") && email.includes(".com"))) {
                res.status(400).send("Invalid email address\n");
                return;
            }
            const comment: string = req.body.comment;

            const c = await contactService;
            const contact: Contact = await c.createContact(callListID, name, company, position, telephoneNumber, email, comment);

            res.status(201).send(contact);

        } catch (e: any) {

            res.status(500).send(e.message);

        }

    });

    //EditContact
    contactRouter.put("/", async (req: Request, res: Response) => {

        try {

            const id: number = req.body.id;

            const name: string = req.body.newContactName;

            if (!name) {
                res.status(400).send("Missing name\n");
                return;
            }

            const telephoneNumber: string = req.body.newTelephonenumber;

            if (!telephoneNumber) {
                res.status(400).send("Missing telephoneNumber\n");
                return;
            }

            //check if telephone includes only numbers
            if (telephoneNumber.match(/^[0-9]+$/) == null) {
                res.status(400).send("Telephone numbers doesn't contain only digits\n");
                return;
            }
            /*
            const status: number = req.body.status;
                
            if (! status) {
                res.status(400).send("Missing status\n");
                return;
            }*//*
    
            const company: string = req.body.company;
            const position: string = req.body.position;
            const email: string = req.body.email;
            
            if(!(email.includes("@") && email.includes(".com"))){
                res.status(400).send("Invalid email address\n");
                return;
            }
    
            const comment: string = req.body.comment;
            */

            const c = await contactService;
            const contact: Contact = await c.editContact(id, name, telephoneNumber); // Fixa så att en kan edita allt sen

            res.status(201).send(contact);

        } catch (e: any) {

            res.status(500).send(e.message);

        }
    });

    contactRouter.delete("/:id", async (req: Request, res: Response) => {

        try {

            const id: number = Number(req.params.id);

            if (!id) {
                res.status(400).send("Missing id\n");
                return;
            }
            const c = await contactService;
            const contact: Boolean = await c.deleteContact(id);

            res.status(201).send(contact);

        } catch (e: any) {

            res.status(500).send(e.message);

        }

    });

    //Changestatus
    contactRouter.put("/:id, status", async (req: Request, res: Response) => {

        try {

            const id: number = parseInt(req.params.id, 10);
            const status: number = parseInt(req.params.status, 4);


            if (!req.body.status[status]) {
                res.status(400).send("Bad call to /contact/:id\n");
            }

            const c = await contactService;
            const noAnswer: Contact = await c.changeStatus(id, status);

            res.status(200).send("Status set\n");

        } catch (e: any) {

            res.status(500).send(e.message);

        }

    });
    return contactRouter;
}

export function contactRouter(): Express.Express {
    return makeContactRouter(contactDBService);
}