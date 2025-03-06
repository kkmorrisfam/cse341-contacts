const express = require("express");
const app = express();
const mongoDB = require("./db/database");

const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

//initialize mongoDB
//add connection string to .env file
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
