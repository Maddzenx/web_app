import { Contact } from "../../model/contact.interface";
import { IContactService } from "../../service/icontact.service";
import { makeContactRouter } from "../contact.router";
import { Express } from "express";
import SuperTest from "supertest";

test("A GET request to / should send a response with the list of contacts", () => {
    const listOfContacts: Contact[] = [
        { id: 0, callListID: 1, name: "Test1", company: "Company1", position: "Position1", telephoneNumber: "123", email: "test@mail.com", status: 2, comment: "CommentTest" },
        { id: 0, callListID: 1, name: "Test1", company: "Company1", position: "Position1", telephoneNumber: "123", email: "test@mail.com", status: 2, comment: "CommentTest"}
    ];

    class MockContactService implements IContactService {

        //only the getContact() test should run since we are sending a GET request. The other tests should not run, if they do, the test will fail

        getContact : () => Promise<Contact[]> = async () => {
            return listOfContacts;
        }

        createContact(callListID: number, name: string, company: string, position: string, telephoneNumber: string, email: string, comment: string): Promise<Contact> {
            expect(0).toBe(1);
            return null as any;
        }

        editContact(id: number, name: string, telephoneNumber: string): Promise<Contact> {
            expect(0).toBe(1);
            return null as any;
        }

        changeStatus(id: number, status: number): Promise<Contact> {
            expect(0).toBe(1);
            return null as any;
        }

        deleteContact(id: number): Promise<Boolean> {
            expect(0).toBe(1);
            return null as any;
        }
    }

    const contacts: MockContactService = new MockContactService;

    const router: Express = makeContactRouter(contacts);

    const request: SuperTest.SuperTest<SuperTest.Test> =
        SuperTest(router);

    request.get("/").then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(listOfContacts);
    });


});