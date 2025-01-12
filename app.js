import bodyParser from "body-parser";
import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/product", (req, res) => {
  res.render("product.ejs");
});
app.get("/footer", (req, res) => {
  res.render("footer.ejs");
});

app.get("/help", (req, res) => {
  res.render("help.ejs");
});
app.get("/user", (req, res) => {
  res.render("./user/user.ejs");
});

app.listen(3000, () => {
  console.log("Server is active at 3000");
});
