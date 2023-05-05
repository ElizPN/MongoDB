import mongodb from "mongodb";
import express from "express";

const app = express();

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

async function response() {
  try {
    const coll = db.collection("clothes");
    app.get("/clothes", async (req, res) => {
      let clothes = await coll.find().toArray();
      console.log(clothes);
      res.send(clothes);
    });
  } catch (error) {
    console.error(error);
  }
}

response();

app.listen(3000, () => {
  console.log("running clothes");
});

