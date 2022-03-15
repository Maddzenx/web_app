// unit test

import { Contact } from "../../model/contact.interface";
import {ContactService} from "../contact.service";

/**getContact */
test("getContact when there is no contacts should return the empty list", () => {
    const contactService = new ContactService({});
    return contactService.getContact().then(
        (contacts: Contact[]) => {
            expect(contacts).toEqual([]);
        })
});

/**createContact */
test("Creating a contact should return a contact with given arguments", async () => {
    const contactService = new ContactService({});
    const contact = await contactService.createContact("name", "company", "position", "telnumber", "email", "comment");
    expect(contact.name).toEqual("name");
    expect(contact.company).toEqual("company");
    expect(contact.position).toEqual("position");
    expect(contact.telephoneNumber).toEqual("telnumber");
    expect(contact.email).toEqual("email");
    expect(contact.comment).toEqual("comment");
   
});




