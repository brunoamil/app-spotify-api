import { MongoClient } from "mongodb";

const URI = "mongodb+srv://brunoamil:V&3HmwDCk9GST!uJ@cluster0.gzlej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const database = client.db("spotify-app");
// const songCollection = await database.collection('songs').find({}).toArray();

