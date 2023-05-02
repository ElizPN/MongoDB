import mongodb from "mongodb";
console.log("Before connecting to MongoDB...");

// the object that contains connection settings

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

async function doStuff() {
  try {
    let coll = db.collection("prods");
    let res = await coll.find({ cost: 100, rest: 10 }).toArray();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
doStuff();

// connection to mongo

mongoClient.connect(async function (error, mongo) {});
