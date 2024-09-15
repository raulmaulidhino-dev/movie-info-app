import express from 'express';
import axios from 'axios'; // Menambahkan Axios untuk mengambil data dari film
const router = express.Router();

// API Key dari OMDb (dapatkan dari http://www.omdbapi.com/)
const OMDB_API_KEY = '66bf3385';

// Add the Movie Ticketing API logic here

router.get("/movie/:title/:customers", async (req, res) => {
    const movieTitle = req.params.title; // Judul film dari parameter URL
    const customers = parseInt(req.params.customers, 10); // Jumlah pelanggan dari parameter URL

    try {
        // Request ke OMDb API untuk mendapatkan data film berdasarkan judul
        const response = await axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${OMDB_API_KEY}`);
        const movieData = response.data;

        if (movieData.Response === 'False') {
            return res.status(404).json({ message: 'Movie not found' });
        }

        // Mengambil tahun rilis film
        const movieYear = parseInt(movieData.Year, 10);
        
        // Menentukan harga tiket berdasarkan tahun rilis
        let ticketPrice;
        if (movieYear < 2000) {
            ticketPrice = 5000; // Rp 5.000 per orang jika film dirilis sebelum tahun 2000
        } else if (movieYear >= 2000 && movieYear < 2010) {
            ticketPrice = 25000; // Rp 25.000 per orang jika film dirilis pada atau setelah tahun 2000
        } else{
            ticketPrice = 50000; // Rp 50.000 per orang jika film dirilis pada atau setelah tahun 2010
        }

        // Menghitung total harga tiket
        const totalPrice = ticketPrice * customers;

        // Mengirimkan data film dan total harga tiket sebagai respons
        res.json({
            movie: {
                title: movieData.Title,
                year: movieData.Year,
                genre: movieData.Genre,
                plot: movieData.Plot,
            },
            ticket: {
                price_per_ticket: ticketPrice,
                customers: customers,
                total_price: totalPrice
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movie data', error: error.message });
    }
})

export default router;