import { Router } from "express";
import type { Request, Response } from 'express';

const addresses = [{ id: 1, value: 'Pushkina 1' }, { id: 2, value: 'Fillimonova 2' }]

export const addressesRouter = Router({})

//addresses ------------------------------
addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    if (req.params.id) {
        let searchedId = +req.params.id;
        let address = addresses.find(p => p.id === searchedId);
        if (!address) {
            res.sendStatus(404);
        }
        res.send(address)
    } else {
        res.sendStatus(404);
    }
})