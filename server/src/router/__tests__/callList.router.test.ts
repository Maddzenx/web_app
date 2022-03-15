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
        async getOneCallList(id: number): Promise<CallList> {
            id = 1;
            return listOfCallLists.at(0) as any;
        }

        getCallList : () => Promise<CallList[]> = async () => {
            return listOfCallLists;
        }

        getOneCallList(id: number): Promise<CallList> {
            throw new Error("Method not implemented.");
        }

        createCallList(title: string, creator: string, description: string): Promise<CallList> {
            expect(0).toBe(1);
            return null as any;
        }

        editCallList(id: number, title: string): Promise<CallList> {
            expect(0).toBe(1);
            return null as any;
        }

        deleteCallList(id: number): Promise<Boolean> {
            expect(0).toBe(1);
            return null as any;
        }
    }

    const cs : MockCallListService = new MockCallListService();


    const router : Express = makeCallListRouter(cs);
    
    const request : SuperTest.SuperTest<SuperTest.Test> = 
        SuperTest(router);

    request.get("/getAll").then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(listOfCallLists);
    });

    request.get("/getOne/:id").then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(listOfCallLists.at(0));
    });
});