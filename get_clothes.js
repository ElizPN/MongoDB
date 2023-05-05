import mongodb from "mongodb";

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

async function getClothes() {
  try {
    const coll = db.collection("clothes");
    const count = { colors: { $size: 3 } };
    const count2 = { sizes: { $elemMatch: { $gt: 3, $lt: 5 } } };
    const res = await coll.find(count2).toArray();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

getClothes();

// { color: { $size: 3 } } - amount of colors / $size
//{sizes: {$elemMatch: {$gt: 3, $lt: 5}}} - arrange of sizes between 3 and 5 / $elemMatch
