import mongodb from "mongodb";

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

async function getData() {
  try {
    const coll = db.collection("users_addresses");
    const londonUsers = { "addr.city": "London" };

    let res = await coll.find(londonUsers).toArray();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

getData();
mongoClient.connect(async function (error, mongo) {});
