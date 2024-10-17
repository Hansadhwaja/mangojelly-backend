const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bookRoute = require('./routes/book.route');

const app = express();


app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;


mongoose.connect(uri)
    .then(() => {
        console.log('Server connected successfully');
    })
    .catch(err => {
        console.log(`Error connecting Server:${err}`);
    })

app.use('/api/comicbooks', bookRoute);

app.get('/', (req, res) => {
    res.send('Welcome to ComicBook Api');
})


app.listen(port, () => {
    console.log(`Server Running on port: ${port}`);
});