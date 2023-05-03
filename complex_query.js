import mongodb from "mongodb";
console.log("Before connectin...");

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

async function getData() {
  try {
    let coll = db.collection("prods");
    let condLess = { cost: { $lt: 500 } };
    let condMore = { cost: { $gt: 500 } };

    let res = await coll.find(condMore).toArray();
    console.log("result", res);
  } catch (error) {
    console.error(error);
  }
}

getData();

// Operators:

// $lt - selects all documents where the given field is less than the passed value:  { cost: { $lt: 500 } }
//
