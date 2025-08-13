import express from 'express';
import type { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello Incubator!';
    res.send(helloMessage);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});