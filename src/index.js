<<<<<<< HEAD
import express from 'express';
import path from 'node:path';
import http from 'node:http';
import mainRouter from './router.js'; // Mengimpor router utama
=======
import express from "express";
import path from "node:path";
import http from "node:http";
import mainRouter from "./router.js"; // Mengimpor router utama
>>>>>>> 4d0e19ad92b24ae7928af6ad3d7504bdaef55685

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Menggunakan router
app.use('/', mainRouter);

app.use('/static', express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);

server.listen(PORT, 'localhost', function(){
<<<<<<< HEAD
  console.log('Listening on localhost:3000');
=======
    console.log('Listening on localhost:3000');
>>>>>>> 4d0e19ad92b24ae7928af6ad3d7504bdaef55685
});
