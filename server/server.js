const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const cardRoutes = require("./routes/cards");

const app = express();
const PORT = 8080;
require("dotenv").config();


// app.use(methodOverride("_method"));
// app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(decorator);

// app.engine(
//   ".hbs",
//   exphbs({
//     extname: ".hbs",
//     defaultLayout: "main.hbs"
//   })
// );
// app.set("views", __dirname + "/views");
// app.set("view engine", ".hbs");


app.use("/", cardRoutes);

app.listen(PORT, () => {
  console.log(`server started on PORT:${PORT}`);
});
