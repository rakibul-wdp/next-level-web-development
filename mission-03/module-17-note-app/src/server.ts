import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

let server: Server;

const PORT = 5000;

dotenv.config();

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("connected to mongodb using mongoose");
    server = app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
