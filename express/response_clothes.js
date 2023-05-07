import mongodb from "mongodb";
import express from "express";

const app = express();

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

app.get("/clothes/:name", async (req, res) => {
  const coll = db.collection("clothes");
  let name = req.params.name;
  console.log(name);
  let user = await coll.findOne({ name: name });

  res.send(user);
});

app.listen(3000, () => {
  console.log("running clothes");
});
