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
    let res = await coll.distinct("cost")
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
doStuff();

// coll.find.  - find all({filter1: value, filter2: value}) documents with responsive filters
// coll.findOne - find just one document
// coll.count - counted number of documents
// coll.find().project({name: 1}) - accept object wich properies are fields, and values are 0 or 1.
// 1 - field will be included in the selection,  0 - not.
// coll.distinct() - get unique values.  coll.distinct("cost") - get array of all prices

// connection to mongo

mongoClient.connect(async function (error, mongo) {});
