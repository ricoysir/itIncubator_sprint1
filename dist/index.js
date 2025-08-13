import express from 'express';
const app = express();
app.get('/', (req, res) => {
    let helloMessage = 'Hello Incubator!';
    res.send(helloMessage);
});
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
//# sourceMappingURL=index.js.map