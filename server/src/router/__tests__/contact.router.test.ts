import { Contact } from "../../model/contact.interface";
import { IContactService } from "../../service/icontact.service";
import { makeContactRouter } from "../contact.router";
import { Express } from "express";
import SuperTest from "supertest";


test("A GET request to / should send a response with the list of contacts", () => {
    const listOfContacts : Contact[] = [
        {callListID: 20, id: 1, name: "Contact 1", company: "", position: "", telephoneNumber: "12345", email: "yoyo@gmail.com", status: 2, comment: ""},
        {callListID: 10, id: 2, name: "Contact 2", company: "", position: "", telephoneNumber: "56789", email: "yoyo@gmail.com", status: 1, comment: ""}
    ];


class MockContactService implements IContactService {

        getContact(): Promise<Contact[]> {
            throw new Error("Method not implemented.");
        }
        createContact(callListID: number, name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string): Promise<Contact> {
            throw new Error("Method not implemented.");
        }
        editContact(id: number, name: string, telephoneNumber: string): Promise<Contact> {
            throw new Error("Method not implemented.");
        }
        changeStatus(id: number, status: number): Promise<Contact> {
            throw new Error("Method not implemented.");
        }
        deleteContact(id: number): Promise<Boolean> {
            throw new Error("Method not implemented.");
        }
    
    }

    const contacts : MockContactService = new MockContactService;

    const router : Express = makeContactRouter(contacts);

    const request : SuperTest.SuperTest<SuperTest.Test> = 
        SuperTest(router);

        request.get("/").then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual(listOfContacts);
        });


});
