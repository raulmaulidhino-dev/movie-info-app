# Movie Ticketing App
Ini adalah proyek kolaboratif akhir untuk memenuhi tugas terakhir kelas Node.js oleh TalentHub. Aplikasi ini dibangun menggunakan **Express.js** dan terintegrasi dengan OMDb API untuk mengambil data film serta menghitung harga tiket berdasarkan tahun rilis film.

## Fitur
- Mengambil detail film (judul, tahun, genre, dan plot) menggunakan OMDb API
- Menghitung harga tiket berdasarkan tahun rilis film
- Mendukung banyak pelanggan dengan menghitung total harga tiket untuk semua pelanggan
- API dibangun menggunakan Express.js dengan rute untuk mengambil detail film

Pastikan Anda sudah menginstal:
- Node.js (v14 atau lebih tinggi)
- npm (v6 atau lebih tinggi)

## Langkah Instalasi

1. Clone repositori ini:

   ```bash
   git clone https://github.com/raulmaulidhino-dev/movie-ticketing-app.git
   cd movie-ticketing-app

2. Instal semua dependensi:
   ```bash
   npm install
   npm install express axios

3. Siapkan API Key OMDb:
Ganti OMDB_API_KEY di src/router.js dengan API key milik Anda sendiri. 
Anda bisa mendapatkan API key dari http://www.omdbapi.com/.

4. Jalankan aplikasi:
   ```bash
   npm run build
   npm run start
   ```
  Ini akan memulai server di ```http://localhost:3000```.

5. Untuk menjalankan aplikasi dalam mode development:
   ```bash
   npm run dev
   npm run start
   ```
  Server akan berjalan dengan live reloading untuk pengembangan.

## Endpoint API
```
Endpoint Tiket Film
- GET /movie/:title/:customers
```
Mengambil detail film berdasarkan judul dan menghitung harga tiket untuk sejumlah pelanggan.

Contoh Request:
```GET http://localhost:3000/movie/Inception/5```

Contoh Respons:
```
{
  "movie": {
    "title": "Inception",
    "year": "2010",
    "genre": "Action, Adventure, Sci-Fi",
    "plot": "A thief who steals corporate secrets..."
  },
  "ticket": {
    "price_per_ticket": 50000,
    "customers": 5,
    "total_price": 250000
  }
}
```

## ESLint dan Webpack
- ***Linting***: Proyek ini menggunakan ESLint untuk memastikan standar coding. Anda bisa menjalankan linting dengan perintah berikut:

npm run lint
- ***Webpack***: Proyek ini menggunakan Webpack untuk membundel aplikasi. Untuk membangun proyek menggunakan Webpack, jalankan:
npm run build

## Alat Pengembangan
- ***Express.js***: Framework web untuk membangun API.
- ***Axios***: Klien HTTP untuk mengambil data film dari OMDb API.
- ***Webpack***: Digunakan untuk membundel aplikasi.
- ***ESLint***: Alat linting untuk memastikan standar penulisan kode.

Saya, @raulmaulidhino-dev, sebagai pemilik repositori sekaligus penginisialisasi projek ini, mengucapkan terima banyak kepada rekan-rekan tim saya:
- @ZackRyu12 sebagai pengonfigurasi dan pembuat API projek ini
- @IsnaJesika sebagai pengonfigurasi module eslint
- @heeyarun04 sebagai penulis penjelasan projek aplikasi ini
- Zayyana, sebagai penulis penjelasan projek aplikasi ini
Semoga dengan adanya projek ini, dapat memberikan insight dan inspirasi baru kepada para visitor!
