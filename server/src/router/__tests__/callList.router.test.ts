import { Express } from "express";
import SuperTest from "supertest";

import { CallList } from "../../model/callList.interface";
import { Contact } from "../../model/contact.interface";
import { ICallListService } from "../../service/icallList.service";
import { makeCallListRouter } from "../callList.router";    

test("A GET request to / should send a response with the list of callLists", () => {
    const listOfCallLists : CallList[] = [
        {id: 1, title: "Call List 1", creator: "sage", contacts: [], description: "my first call list"},
        {id: 2, title: "Call List 2", creator: "sage", contacts: [], description: "my second call list"}
    ];

class MockCallListService implements ICallListService {

        getCallList : () => Promise<CallList[]> = async () => {
            return listOfCallLists;
        }

        createCallList(title: string, creator: string, contacts: Array<Contact["id"]>, description: string): Promise<CallList> {
            throw new Error("Method not implemented.");
        }

        editCallList(id: number, title: string, creator: string, contacts: number[], decription: string): Promise<CallList> {
            throw new Error("Method not implemented.");
        }

        deleteCallList(id: number): Promise<Boolean> {
            throw new Error("Method not implemented.");
        }

        addContact(callListId: number): Promise<CallList> {
            throw new Error("Method not implemented.");
        }
        
    

    }

    const cs : MockCallListService = new MockCallListService();


    const router : Express = makeCallListRouter(cs);
    
    const request : SuperTest.SuperTest<SuperTest.Test> = 
        SuperTest(router);

    request.get("/").then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(listOfCallLists);
    });
});