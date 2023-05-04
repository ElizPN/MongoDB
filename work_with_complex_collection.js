import mongodb from "mongodb";

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

async function getData() {
  try {
    const coll = db.collection("employees");
    const highSalary = {  "employee.position.salary": {$lt: 2000} };

    let res = await coll.find(highSalary).toArray();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

getData();
mongoClient.connect(async function (error, mongo) {});
