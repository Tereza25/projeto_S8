const app = require('./scr/app');
const port = 8080

app.listen(port, () => {
    console.log(`Executando em http://localhost:${port}`);
})