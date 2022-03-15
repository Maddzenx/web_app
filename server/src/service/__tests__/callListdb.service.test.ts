import { CallList } from "../../model/callList.interface";
import { callListDBService } from "../callListdb.service";

jest.mock("../../db/conn");

/**getCallList */
test("getCallList when callList is empty should return the empty list", () => {
    return callListDBService.getCallList("user").then(
        (callLists: CallList[]) => {
            expect(callLists).toEqual([]);
        })
});

/**getOneCallList */
test("getOneCallList should return the wanted callList", async () => {
    const testCallList = await callListDBService.createCallList("test", "", "");
    return callListDBService.getOneCallList(testCallList.id).then(
        (callList: CallList) => {
            expect(callList.id).toEqual(testCallList.id);
        })
});


/**createCallList */
test("The array contacts of callList should be empty when creating a new callList", () => {
    return callListDBService.createCallList("callList test", "user", "").then(async (callList: CallList) => {
        expect(callList.contacts.length).toBe(0);
    })

});
test("Creating a callList should return a callList with its given arguments", async () => {
    return callListDBService.createCallList("title", "user", "description").then((callList: CallList) => {
        expect(callList.title).toEqual("title");
        //expect(callList.description).toEqual("description");
        expect(callList.contacts).toEqual([]);
    })
});

/**editCallList */
test("Editing a callList should return ", async () => {
    const callList = await callListDBService.createCallList("test", "", "yo")
    return callListDBService.editCallList(callList.id, "changed").then(async (callList: CallList) => {
        expect(callList.title).toEqual("changed");
        //expect(callList.description).toEqual("description");
        expect(callList.contacts).toEqual([]);
    })

});


/**deleteCallList*/
test("When calling deleteCallist it should return true", async () => {
    const callList = await callListDBService.createCallList("test", "", "");
    return expect(callListDBService.deleteCallList(callList.id)).resolves.toBe(true);
});

test("when getting a delted callList it should throw an error", async () => {
    const callList = await callListDBService.createCallList("delete-test", "", "");
    await callListDBService.deleteCallList(callList.id);
    return expect(callListDBService.getOneCallList(callList.id)).rejects.toStrictEqual(Error("No document with id type"));
});