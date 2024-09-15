import express from "express"
import path from "node:path"
import http from "node:http"
import mainRouter from "./router.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', mainRouter);

app.use('/static', express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);

server.listen(PORT, 'localhost', function(){
    console.log('Listening on localhost:3000');
});