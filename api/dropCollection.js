import { MongoClient } from "mongodb";

// URI de conexão (substitua com suas credenciais)
const URI = "mongodb+srv://brunoamil:V&3HmwDCk9GST!uJ@cluster0.gzlej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Nome do banco de dados e da coleção
const dbName = "spotify-app";
const collectionName = "songs";

async function dropCollection() {
  const client = new MongoClient(URI);

  try {
    // Conectar ao MongoDB
    await client.connect();
    console.log("Conectado ao MongoDB!");

    // Acessar o banco de dados
    const database = client.db(dbName);

    // Dropar a coleção
    const result = await database.collection(collectionName).drop();
    if (result) {
      console.log(`Coleção '${collectionName}' removida com sucesso!`);
    } else {
      console.log(`Coleção '${collectionName}' não existe.`);
    }
  } catch (error) {
    console.error("Erro ao dropar a coleção:", error);
  } finally {
    // Fechar a conexão
    await client.close();
    console.log("Conexão com o MongoDB fechada.");
  }
}

// Executar a função
dropCollection();