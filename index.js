import mongodb from "mongodb";
console.log("Before connecting to MongoDB...");

// the object that contains connection settings

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

async function doStuff() {
  //   const result = await db.collection("prods").countDocuments();
  //   console.log(result);

  let coll = db.collection("users");

  let res = await coll.find().toArray();
  console.log(res);
}
doStuff();

// connection to mongo

mongoClient.connect(async function (error, mongo) {});
