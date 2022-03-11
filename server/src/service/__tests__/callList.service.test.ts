import { CallList } from "../../model/callList.interface";
import { CallListService } from "../callList.service";

/**getCallList */
test("getCallList when callList is empty should return the empty list", () => {
    const callListService = new CallListService({});
    return callListService.getCallList().then(
        (callLists: CallList[]) => {
            expect(callLists).toEqual([]);
        })
});

/**addContact */
test("Adding a contact should increase the length of the callLists argument contacts", () => {
    const callListService = new CallListService({});
    return callListService.addContact(1).then(async (callList : CallList) => {
            expect(callList.contacts.length).toBe(1);
        })

    });

/**createCallList */
test("The array contacts of callList should be empty when creating a new callList", () => {
    const callListService = new CallListService({});
    return callListService.createCallList("callList test", "user", "").then(async (callList : CallList) => {
            expect(callList.contacts.length).toBe(0);
        })

    });
test("Creating a callList should return a callList with its given arguments", async () => {
        const callListService = new CallListService({});
        return callListService.createCallList("title", "user", "description").then((callList : CallList) => {
            expect(callList.title).toEqual("title");
            expect(callList.description).toEqual("description");
            expect(callList.contacts).toEqual([]);
        })
    });

/**editCallList */
test("Editing a callList should return ", () => {
    const callListService = new CallListService({});
    return callListService.editCallList(1, "title", "user", [], "description").then(async (callList : CallList) => {
            expect(callList.title).toEqual("title");
            expect(callList.creator).toEqual("user");
            expect(callList.description).toEqual("description");
            expect(callList.contacts).toEqual([]);
        })

    });


/**deleteCallList */
test("Deleting a callList should decrease the length of callLists by one", () => {
    const callListService = new CallListService({});
    return callListService.addContact(1).then(async (_ : CallList) => {

        callListService.addContact(1).then((callList : CallList) => {
            expect(callList.contacts.length).toBe(0);
        })

    });
})
