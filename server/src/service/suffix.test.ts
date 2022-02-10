// unit test

import * as CS from "./contact.service";
import { Contact } from "../model/contact.interface";

test("Creating a contact should return a contact with given arguments", () => {

    const contactService = new CS.ContactService({});
    return contactService.createContact("name", "company", "position", "telnumber", "email", "comment").then((contact : Contact) => {
        expect(contact.name).toEqual("name");
        expect(contact.company).toEqual("company");
        expect(contact.position).toEqual("position");
        expect(contact.telephoneNumber).toEqual("telnumber");
        expect(contact.email).toEqual("email");
        expect(contact.comment).toEqual("comment");
    })
});



