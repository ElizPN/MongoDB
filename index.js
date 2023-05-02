import mongodb from "mongodb";
console.log("Before connecting to MongoDB...");

// the object that contains connection settings

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

let prods = [
  {
    name: "prod1",
    cost: 1000,
    rest: 100,
  },
  {
    name: "prod2",
    cost: 2000,
    rest: 200,
  },
  {
    name: "prod3",
    cost: 3000,
    rest: 300,
  },
];
let prod = { name: "test", cost: 300, rest: 30 };

async function doStuff() {
  try {
    let coll = db.collection("prods");
    await coll.insertMany(prods);
    await coll.deleteMany({ cost: 500 });
    let res = await coll.find().toArray();
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
//coll.insertOne() - add one document
// .insertMany()
// .deleteOne
// .deleteMany

// connection to mongo

mongoClient.connect(async function (error, mongo) {});
