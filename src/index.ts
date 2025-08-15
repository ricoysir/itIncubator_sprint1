import express from 'express';
import type { Request, Response } from 'express';

const app = express();

const port = process.env.PORT || 3000;

const addresses = [{value: 'Pushkina 1'}, {value: 'Fillimonova 2'}]
const products = [{title: 'tomato'}, {title: 'apple'}]

app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})
 
app.get('/products/tomato', (req: Request, res: Response) => {
    let tomato = products.find(p => p.title === 'tomato');
    res.send(tomato)
})

app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello Incubator!';
    res.send(helloMessage);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});