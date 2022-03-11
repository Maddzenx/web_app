import { callListDBService } from "../callListdb.service";

jest.mock("../../db/conn");

/**createCallList */
test("Creating a callList should add a callList to the database", async () => {
    await callListDBService.createCallList("Test callList", "user", "");
    const callLists = await callListDBService.getCallList();
    expect(callLists.length).toBe(1);
});