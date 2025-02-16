import express from 'express';
import cors  from 'cors'
import { database } from './connect.js';

const PORT = 3001;
const app = express();

app.use((cors()));
app.get('/api/', (req, res) => {
    res.send('Just andpoint for artists')
});

app.get('/api//artists', async (req, res) => {
    res.send(await database.collection('artists').find({}).toArray())
});

app.get('/api/songs', async (req, res) => {
    res.send(await database.collection('songs').find({}).toArray())
});

app.get("*", async (req, res) => {
    res.send('Acesse uma rota válida')
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});