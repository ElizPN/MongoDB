import mongodb from "mongodb";

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

async function getUsers() {
  try {
    let coll = db.collection("users");
    let res = await coll.find().sort({ salary: 1, age: -1 }).toArray();
    let res2 = await coll.find().sort({ age: -1 }).limit(5).toArray();
    console.log(res2);
  } catch (error) {
    console.error(error);
  }
}

getUsers();

mongoClient.connect(async function (error, mongo) {});

// .sort({ salary: 1, age: -1 })  1 sort ascending, -1 sort descending.
