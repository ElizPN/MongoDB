import mongodb from "mongodb";
import express from "express";

const app = express();

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

app.get("/clothes", async (req, res) => {
  const coll = db.collection("clothes");
  const result = await coll.find().toArray();
  console.log(result);
  res.send(result);
});

app.listen(3000, () => {
  console.log("running clothes");
});
