import express from 'express';
import { productRouter } from './routes/products.js';
import { addressesRouter } from './routes/addresses.js';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // заменяет bodyParser.json()
app.use(express.urlencoded({ extended: true })); // заменяет bodyParser.urlencoded()
//routers
app.use('/products', productRouter);
app.use('/addresses', addressesRouter);
app.get('/', (req, res) => {
    let helloMessage = 'Hello Incubator!';
    res.send(helloMessage);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
//# sourceMappingURL=index.js.map