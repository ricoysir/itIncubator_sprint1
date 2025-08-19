import express from 'express';
import type { Request, Response } from 'express';
import { productRouter } from './routes/products.js';
import { addressesRouter } from './routes/addresses.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRouter);
app.use('/addresses', addressesRouter);

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello Incubator!';
    res.send(helloMessage);
});