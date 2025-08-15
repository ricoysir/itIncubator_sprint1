import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
const addresses = [{ value: 'Pushkina 1' }, { value: 'Fillimonova 2' }];
const products = [{ title: 'tomato' }, { title: 'apple' }];
app.get('/products', (req, res) => {
    res.send(products);
});
app.get('/products/tomato', (req, res) => {
    let tomato = products.find(p => p.title === 'tomato');
    res.send(tomato);
});
app.get('/addresses', (req, res) => {
    res.send(addresses);
});
app.get('/', (req, res) => {
    let helloMessage = 'Hello Incubator!';
    res.send(helloMessage);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
//# sourceMappingURL=index.js.map