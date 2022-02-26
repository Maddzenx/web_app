import express, { Request, Response} from "express";
import * as CallListService from "../service/callList.service";
import { CallList } from "../model/callList.interface";
import { Contact } from "../model/contact.interface";


export const callListRouter = express.Router();

/**get calllist**/
callListRouter.get("/", async (req: Request, res: Response) => {
    try {
        const callLists : Array<CallList> = await CallListService.getCallList();

        res.status(200).send(callLists);

    } catch (e : any) {
   
    res.status(500).send(e.message);
    }
   
   });

   /**create call list**/
   callListRouter.post("/", async (req: Request, res: Response) => {

    try {
   const title: string = req.body.title;
   
   
    if (! title) {
   
    res.status(400).send("Missing title\n");
   
    return;
   
    }
    const creator: string = req.body.creator;
   
   
    if (! creator) {
   
    res.status(400).send("Missing creator\n");
   
    return;
   
    }

    const contacts: Array<Contact["id"]> = req.body.contacts;
   
   
   
    if (! contacts) {
   
    res.status(400).send("Missing contacts\n");
   
    return;
   
    }

    const description: string = req.body.description;
        
    if (! description) {
    
    res.status(400).send("Missing description\n");
    
    return;
    
    }
   
   
    const callList : CallList = await CallListService.createCallList(title, creator, contacts, description);
   
    res.status(201).send(callList);
   
    } catch (e : any) {
   
    res.status(500).send(e.message);
   
    }
   
   });

   //Checking edit Call list
   callListRouter.put("/", async (req: Request, res: Response) => {

    try {
   
    const id: number = req.body.id;
    
    if (! id) {
    
    res.status(400).send("Missing id\n");
    
    return;
    
    }
    const title: string = req.body.creator;
   
   
    if (! title) {
   
    res.status(400).send("Missing title\n");
   
    return;
   
    }
    const creator: string = req.body.creator;
   
   
    if (! creator) {
   
    res.status(400).send("Missing creator\n");
   
    return;
   
    }

    const contacts: Array<Contact["id"]> = req.body.contacts;
   
   
   
    if (! contacts) {
   
    res.status(400).send("Missing contacts\n");
   
    return;
   
    }

    const decription: string = req.body.decription;
        
    if (! decription) {
    
    res.status(400).send("Missing decription\n");
    
    return;
    
    }
  

   
    const callList : CallList = await CallListService.editCallList(id, title, creator, contacts, decription);
   
    res.status(201).send(callList);
   
    } catch (e : any) {
   
    res.status(500).send(e.message);
   
    }
   });

   /**delete calll lis**/
   callListRouter.delete("/:id", async (req : Request, res: Response) => {

    try {
   
        const id: number = req.body.id;
        
        if (! id) {
        
        res.status(400).send("Missing id\n");
        
        return;
        
        }

    const callList : boolean = await CallListService.deleteCallList(id);

    res.status(201).send(callList);
   
    } catch (e : any) {
   
    res.status(500).send(e.message);
   
    }

   });


   //Checking add contact to call list

   callListRouter.put("/", async (req: Request, res: Response) => {

    try {
   
    const contactId: Contact["id"] = req.body.contactId;
   
   
    if (! contactId) {
   
    res.status(400).send("Missing contactId\n");
   
    return;
   
    }

    const callListId: CallList["id"] = req.body.callListId;
   
   
    if (! callListId) {
   
    res.status(400).send("Missing callListId\n");
   
    return;
   
    }
   
    const isAdded : Boolean = await CallListService.addContact(contactId, callListId);
   
    res.status(201).send(isAdded);
   
    } catch (e : any) {
   
    res.status(500).send(e.message);
   
    }
   
   });
