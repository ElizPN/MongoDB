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
    let equal = { cost: { $eq: 300 } };
    let notEqual = { cost: { $ne: 300 } };
    let someValues = { cost: { $in: [1000, 300] } };
    let notEqualAll = { cost: { $nin: [1000, 300] } };
    let shouldRemove = { cost: { $eq: 1000 } };
    // Choose all documents that have cost more then 200 AND have rest equal 10
    let combineCount = {
      $and: [{ cost: { $gt: 200 } }, { rest: { $eq: 10 } }],
    };
    // Choose documents that have cost more then 200 OR have rest equal 10
    let firstValueFromArr = {
      $or: [{ cost: { $gt: 200 } }, { rest: { $eq: 10 } }],
    };
    let sellProd = {cost: {$not: {$eq: 300}}}

    await coll.deleteMany(shouldRemove);

    let res = await coll.find(sellProd).toArray();
    console.log("result", res);
  } catch (error) {
    console.error(error);
  }
}

getData();

// Operators:

// $lt - selects all documents where the given field is less than the passed value:  { cost: { $lt: 500 } }
// $gt - given field is more than the passed value
// $lte - less or equal the passed value
// $gte - more or equal the passed value
// $eq  - equal the passed value
// $ne - not equal the passed value
// $in - shoose one of values provided in array
// $nin - not Equal All values provided in array
