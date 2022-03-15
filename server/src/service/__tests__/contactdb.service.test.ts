import { Contact } from "../../model/contact.interface";
import { callListDBService } from "../callListdb.service";
import {contactDBService} from "../contactdb.service";

/**getContact */
test("getContact when there is no contacts should return the empty list", async () => {
    const callList = await callListDBService.createCallList("test", "", "");
    return contactDBService.getContact(callList.id).then(
        (contacts: Contact[]) => {
            expect(contacts).toEqual([]);
        })
});

/**createContact */
test("Creating a contact should return a contact with given arguments", async () => {
    const callList = await callListDBService.createCallList("test", "", "");
    const contact = await contactDBService.createContact(callList.id, "name", "company", "position", "telnumber", "email", "comment");
    expect(contact.name).toEqual("name");
    expect(contact.company).toEqual("company");
    expect(contact.position).toEqual("position");
    expect(contact.telephoneNumber).toEqual("telnumber");
    expect(contact.email).toEqual("email");
    expect(contact.comment).toEqual("comment");
   
});

/**editContact */
test("Editing a contact should return a contact with its updated arguments", async () => {
    const callList = await callListDBService.createCallList("test", "", "");
    const contact = await contactDBService.createContact(callList.id, "name", "company", "position", "123", "email", "comment");
    return contactDBService.editContact(contact.id, "changed", "456").then((contact: Contact) => {
        expect(contact.name).toEqual("changed");
        expect(contact.telephoneNumber).toEqual("456");

    })
});

/**deleteContact */
test("The length of the array of contacts in callList should be empty when the corresponding contact is deleted", async () => {
    const callList = await callListDBService.createCallList("test", "", "");
    const contact = await contactDBService.createContact(callList.id, "name", "company", "position", "123", "email", "comment");
    return contactDBService.deleteContact(contact.id).then(() => {
        expect(callList.contacts.length == 0).toBe(true);
    })
        
});
