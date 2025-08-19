import request from "supertest";
import { app } from "./../../app.ts"

describe('/products', () => {

    it('should return 200 and array of products', async() => {
        await request(app)
            .get('/products')
            .expect(200, []);
    })
})