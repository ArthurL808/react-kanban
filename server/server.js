const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const cardRoutes = require("./routes/cards");

const app = express();
const PORT = process.env.EXPRESS_HOST_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) { console.log('No Port Found'); }
if (!SESSION_SECRET) { console.log('No Session Secret Found'); }
if (!REDIS_HOSTNAME) { console.log('No Redis Hostname Found'); }
if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) { return process.exit(1); }
// require("dotenv").config();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(decorator);


app.use("/cards", cardRoutes);

app.listen(PORT, () => {
  console.log(`server started on PORT:${PORT}`);
});
