import Express, { Request, Response } from "express";
import { CallList } from "../model/callList.interface";
import { Contact } from "../model/contact.interface";
import { ICallListService } from "../../src/service/icallList.service";
import { callListDBService } from "../service/callListdb.service";

export function makeCallListRouter(callListService: ICallListService): Express.Express {
    const callListRouter: Express.Express = Express();

    /**get calllists**/
    callListRouter.get("/getAll/:username", async (req: Request, res: Response) => {
        try {
            const username = req.params.username;
            const cl = await callListService;
            const callLists: Array<CallList> = await cl.getCallList(username);

            res.status(200).send(callLists);

        } catch (e: any) {

            res.status(500).send(e.message);
        }

    });

    /**get one calllist**/
    callListRouter.get("/getOne/:id", async (req: Request, res: Response) => {
        try {
            const cl = await callListService;
            const id = Number(req.params.id);
            const callList: CallList = await cl.getOneCallList(id);

            res.status(200).send(callList);

        } catch (e: any) {

            res.status(500).send(e.message);
        }

    });

    /**create call list**/
    callListRouter.post("/", async (req: Request, res: Response) => {

        try {

            const title: string = req.body.title;
            const description: string = req.body.description;
            const creator: string = req.body.username;

            if (!title) {
                res.status(400).send("Missing title\n");
                return;
            }
            
            
            if (! description) {
                res.status(400).send("Missing creator\n");
                return;
            }

            /*
            if (! creator) {
                res.status(400).send("Missing creator\n");
                return;
            }
        */ 

           

            const cl = await callListService;
            const callList: CallList = await cl.createCallList(title,  description, creator); // Ev behövs user här

            res.status(201).send(callList);

        } catch (e: any) {

            res.status(500).send(e.message);

        }

    });

    //edit call list
    callListRouter.put("/", async (req: Request, res: Response) => {

        try {

            const id: number = req.body.id;
            const title: string = req.body.title;
            

            if (!id) {
                res.status(400).send("Missing id\n");
                return;
            }
            

            if (!title) {
                res.status(400).send("Missing title\n");
                return;
            }
            

            const cl = await callListService;
            const callList: CallList = await cl.editCallList(id, title);

            res.status(201).send(callList);

        } catch (e: any) {

            res.status(500).send(e.message);

        }
    });

    /**delete calll lis**/
    callListRouter.delete('/:id', async (req: Request, res: Response) => {

        try {

            const id: number = Number(req.params.id);

            if (!id) {
                res.status(400).send("Missing id\n");
                return;
            }

            const cl = await callListService;
            const isDeleted: Boolean = await cl.deleteCallList(id);

            res.status(201).send(isDeleted);

        } catch (e: any) {

            res.status(500).send(e.message);

        }

    });

    return callListRouter;
}
export function callListRouter(): Express.Express {

    return makeCallListRouter(callListDBService);
}