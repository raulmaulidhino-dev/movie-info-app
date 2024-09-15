import express from 'express';
const router = express.Router();

router.get("/test", (req, res, next) => {
    res.send("Hello World! This is just for testing.");
});

// Add the Movie Ticketing API logic here

export default router;