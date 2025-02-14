import express from 'express';
import { artistArray } from "../database/artists.js";
import { songsArray } from "../database/songs.js";

const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
    res.send('Just andpoint for artists')
});

app.get('/artists', (req, res) => {
    res.send(artistArray)
});

app.get('/songs', (req, res) => {
    res.send(songsArray)
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});