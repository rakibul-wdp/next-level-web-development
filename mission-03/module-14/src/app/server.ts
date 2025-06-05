import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import app from "./app";

let server;
const port = 5000;

dotenv.config();

const uri = process.env.MONGO_URI as string;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const bootstrap = async () => {
  await client.connect();
  console.log("connected to mongodb");

  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
