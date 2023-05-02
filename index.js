import mongodb from "mongodb";
console.log("Before connecting to MongoDB...");

// the object that contains connection settings

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

async function doStuff() {
  let proj = { _id: 0 };
  try {
    let coll = db.collection("prods");
    let res = await coll.find().project(proj).toArray();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
doStuff();

// coll.find.  - find all({filter1: value, filter2: value}) documents with responsive filters
// coll.findOne - find just one document
// coll.count

// connection to mongo

mongoClient.connect(async function (error, mongo) {});
