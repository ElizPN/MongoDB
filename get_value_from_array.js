import mongodb from "mongodb";

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

async function getValue() {
  try {
    const coll = db.collection("languages");
    const count = { langs: ["german", "spanish"] };
    const count2 = { "langs.1": "spanish" };
    const res = await coll.find(count2).toArray();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

getValue();

mongoClient.connect(async function (error, mongo) {});
