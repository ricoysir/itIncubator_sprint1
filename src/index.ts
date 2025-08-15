import express from 'express';
import type { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = process.env.PORT || 3000;

const addresses = [{ id: 1, value: 'Pushkina 1' }, { id: 2, value: 'Fillimonova 2' }]
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'apple' }]

const parserMiddleware = bodyParser({})
app.use(parserMiddleware);

//products -------------------
app.get('/products', (req: Request, res: Response) => {
    if (req.query.title) {
        let searchString = req.query.title?.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1)
        )
    }
    res.send(products)
})

app.post('/products', (req: Request, res: Response) => {
    const newProduct = {
        id: products.length + 1,
        title: req.body.title
    }
    const index = products.findIndex(p => p.id === newProduct.id);

    if (index === -1) {
        products.push(newProduct);
        const newIndex = products.findIndex(p => p.id === newProduct.id);
        res.sendStatus(201).send(newProduct);
    } else {
        console.log(`"${newProduct.title}" already exists in the array.`);
    }
})


app.get('/products/:id', (req: Request, res: Response) => {
    let searchedId = +req.params.id;
    let product = products.find(p => p.id === searchedId);
    if (!product) {
        res.sendStatus(404);
    }
    res.send(product)
})

app.delete('/products/:id', (req: Request, res: Response) => {
    let searchedId = +req.params.id;
    for (let i = 0; i < products.length; i++,) {
        if (products[i].id === searchedId) {
            products.splice(i, 1);
            res.sendStatus(204);
            return;
        }
    }
    res.sendStatus(404);
})

//addresses ------------------------------
app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    let searchedId = +req.params.id;
    let address = addresses.find(p => p.id === searchedId);
    if (!address) {
        res.sendStatus(404);
    }
    res.send(address)
})

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello Incubator!';
    res.send(helloMessage);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});