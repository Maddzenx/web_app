import { Express } from "express";
import SuperTest from "supertest";
import { User } from "../../model/user.interface";
import { IUserService } from "../../service/iuser.service";
import { makeUserRouter } from "../user.router";

test("A GET request to / should send a response with the list of users", () => {
    const listOfUsers: User[] = [
        { username: "Test1", email: "test@mail.se", password: "Password1" },
        { username: "Test1", email: "test@mail.se", password: "Password1" }
    ];

    class MockUserService implements IUserService {

        //only the getUser() test should run since we are sending a GET request. The other tests should not run, if they do, the test will fail

        getUser: () => Promise<User[]> = async () => {
            return listOfUsers;
        }

        createUser(username: string, email: string, password: string): Promise<User> {
            expect(0).toBe(1);
            return null as any;
        }

        logInUser(email: string, password: string): Promise<User> {
            expect(0).toBe(1);
            return null as any;
        }


    }

    const cs: MockUserService = new MockUserService();

    const router: Express = makeUserRouter(cs);

    const request: SuperTest.SuperTest<SuperTest.Test> =
        SuperTest(router);

    request.get("/").then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(listOfUsers);
    });
});