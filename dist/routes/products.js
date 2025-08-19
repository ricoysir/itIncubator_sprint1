import { Router } from "express";
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'apple' }];
export const productRouter = Router({});
productRouter.get('/', (req, res) => {
    if (req.query.title) {
        let searchString = req.query.title?.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1));
    }
    res.sendStatus(200).send(products);
});
productRouter.post('/', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        title: req.body.title
    };
    const index = products.findIndex(p => p.id === newProduct.id);
    if (index === -1) {
        products.push(newProduct);
        const newIndex = products.findIndex(p => p.id === newProduct.id);
        res.sendStatus(201).send(newProduct);
    }
    else {
        console.log(`"${newProduct.title}" already exists in the array.`);
    }
});
productRouter.get('/:id', (req, res) => {
    if (req.params.id) {
        let searchedId = +req.params.id;
        let product = products.find(p => p.id === searchedId);
        res.send(product);
    }
    else {
        res.sendStatus(404);
    }
});
productRouter.put('/:id', (req, res) => {
    if (req.params.id) {
        let searchedId = +req.params.id;
        let product = products.find(p => p.id === searchedId);
        if (product) {
            product.title = req.body.title;
            res.sendStatus(200).send(product);
        }
        else {
            res.sendStatus(404);
        }
    }
    else {
        res.sendStatus(404);
    }
});
productRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.sendStatus(404).send('Invalid ID sent');
    }
    let searchedId = parseInt(id, 10);
    if (isNaN(searchedId)) {
        return res.status(400).send('Invalid ID format');
    }
    let productIndex = products.findIndex(p => p.id === searchedId);
    if (productIndex === -1) {
        return res.sendStatus(404);
    }
    products.splice(productIndex, 1);
    return res.sendStatus(204);
});
//# sourceMappingURL=products.js.map