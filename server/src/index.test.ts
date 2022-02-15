//intergration test

import * as Supertest from "supertest";

import { app } from "./start";

const request : Supertest.SuperTest<Supertest.Test> = Supertest.default(app);


test("End-to-end test", async () => {

 const res = await request.get('/contact');

 expect(res.statusCode).toEqual(200);

 expect(res.body).toEqual({});

});