import express from 'express';
import path from 'node:path';
import http from 'node:http';
import mainRouter from './router.js'; // Mengimpor router utama

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Menggunakan router
app.use('/', mainRouter);

app.use('/static', express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);

<<<<<<< HEAD
server.listen(PORT, 'localhost', function () {
=======
server.listen(PORT, 'localhost', function(){
>>>>>>> 16297a1eaa2e86ac5a6bb86594c03e27e579b964
  console.log('Listening on localhost:3000');
});
