import expressHandlebars from "express-handlebars";
import mongodb from "mongodb";
import express from "express";
import { __dirname } from "../__dirname.js";

const app = express();

let mongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

const db = mongoClient.db("initial-data");

const handlebars = expressHandlebars.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/user/show/:name", async (req, res) => {
  const coll = db.collection("users");
  const name = req.params.name;
  const user = await coll.findOne({ name: name });

  res.render("user", { user: user });
});

app.use((req, res) => {
  res.status(404).render("error");
});

app.listen(3000, () => {
  console.log("running users");
});

// this code should be aware of enviroment , so we use __dirname
