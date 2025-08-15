import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
const addresses = [{ id: 1, value: 'Pushkina 1' }, { id: 2, value: 'Fillimonova 2' }];
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'apple' }];
app.get('/products', (req, res) => {
    if (req.query.title) {
        let searchString = req.query.title?.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1));
    }
    res.send(products);
});
app.get('/products/:id', (req, res) => {
    let searchedId = +req.params.id;
    let product = products.find(p => p.id === searchedId);
    if (!product) {
        res.sendStatus(404);
    }
    res.send(product);
});
app.get('/addresses', (req, res) => {
    res.send(addresses);
});
app.get('/addresses/:id', (req, res) => {
    let searchedId = +req.params.id;
    let address = addresses.find(p => p.id === searchedId);
    if (!address) {
        res.sendStatus(404);
    }
    res.send(address);
});
app.get('/', (req, res) => {
    let helloMessage = 'Hello Incubator!';
    res.send(helloMessage);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
//# sourceMappingURL=index.js.map