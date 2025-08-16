import { Router } from "express";
const addresses = [{ id: 1, value: 'Pushkina 1' }, { id: 2, value: 'Fillimonova 2' }];
export const addressesRouter = Router({});
//addresses ------------------------------
addressesRouter.get('/', (req, res) => {
    res.send(addresses);
});
addressesRouter.get('/:id', (req, res) => {
    if (req.params.id) {
        let searchedId = +req.params.id;
        let address = addresses.find(p => p.id === searchedId);
        if (!address) {
            res.sendStatus(404);
        }
        res.send(address);
    }
    else {
        res.sendStatus(404);
    }
});
//# sourceMappingURL=addresses.js.map