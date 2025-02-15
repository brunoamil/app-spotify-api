import { artistArray } from "../database/artists.js";
import { songsArray } from "../database/songs.js";
import { database } from "./connect.js";

const newArtistArray = artistArray.map((currentArtist) => {
    const newArtistObj = {...currentArtist}
    delete newArtistObj.id;
    return newArtistObj;
});

const newSongsArray = songsArray.map((currentSong) => {
    const newSongsObj = {...currentSong}
    delete newSongsObj.id;
    return newSongsObj;
});

const resArtists = await database.collection('artists').insertMany(newArtistArray);
const resSongs = await database.collection('songs').insertMany(newSongsArray);
// console.log("resArtists", resArtisssts);
// console.log("resSongs", resSongs)