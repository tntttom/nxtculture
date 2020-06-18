//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const collections = require("./data/collections");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/collectionsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const collectionSchema = {
  name: String,
  items: Number,
};

const Collection = mongoose.model("Collection", collectionSchema);

const neon = new Collection({
  name: "Neon",
  items: 17,
});

neon.save();

const flowers = new Collection({
  name: "Flowers",
  items: 15,
});

flowers.save();

const culture = new Collection({
  name: "Culture",
  items: 7,
});

culture.save();

// if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
//   app.get("*", (req, res) => {
//     res.sendFile("build.index.html", (root: __dirname));
//   });
// }

app.get("/", function (req, res) {
  res.send({ message: "We did it!" });
});

app.get("/collections", function (req, res) {
  res.json({
    featuredCollecction: {
      id: "fc1",
      name: "Culture",
      items: 5,
    },

    collections: [
      {
        id: "c1",
        name: "Flowers",
        items: 23,
      },
      {
        id: "c2",
        name: "Neon",
        items: 7,
      },
      {
        id: "c3",
        name: "Asia",
        items: 17,
      },
      {
        id: "c4",
        name: "Pastel",
        items: 12,
      },
    ],
  });
});

app.listen(PORT, function () {
  console.log("Server is running on port 5000");
});
