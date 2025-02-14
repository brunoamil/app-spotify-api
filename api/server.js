import express from 'express';

import { database } from './connect.js';

const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
    res.send('Just andpoint for artists')
});

app.get('/artists', async (req, res) => {
    res.send(await database.collection('artists').find({}).toArray())
});

app.get('/songs', async (req, res) => {
    res.send(await database.collection('songs').find({}).toArray())
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});