import { User } from "../../model/user.interface";
import { userDBService } from "../userdb.service"

jest.mock("../../db/conn");

test("getUser when there is no users should return an empty list", async () => {
    const users = await userDBService.getUser();
    expect(users).toEqual([]);
});

test("createUser should add a user to the database", async () => {
    await userDBService.createUser("fakeUsername1", "fake1@gmail.com", "fake1Password123");
    const users = await userDBService.getUser();
    expect(users.length).toEqual(1);
});


test("logInUser shold return a user if it exists", async () => {
    await userDBService.logInUser("fakeUsername1", "fake1Password123");
    const users = await userDBService.getUser();
    expect(users[0].username).toEqual("fakeUsername1");
    if (users[0].username != "fakeUsername1") {
        expect(users).toEqual([]);
    }
});


