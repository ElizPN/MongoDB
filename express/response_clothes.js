import mongodb from "mongodb";
import express from "express";

const app = express();

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

app.get("/clothes/:id", async (req, res) => {
  const coll = db.collection("clothes");

  let prod = await coll.findOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  console.log(prod);

  res.send(prod);
});

app.listen(3000, () => {
  console.log("running clothes");
});
