const express = require("express");
const articleRouter = require("./routes/articles");
const Article = require("./models/article");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const databaseName = "blogDB";

mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.cklpl3g.mongodb.net/${databaseName}`
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost${port}`);
});
