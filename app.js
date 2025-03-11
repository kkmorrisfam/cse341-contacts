require("dotenv").config();
const express = require("express");
const mongoDB = require("./db/database");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

//each time I create or change a route, I need to run "node swagger.js" in the terminal "npm run swagger"
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/", require("./routes"));
app.use(bodyParser.json());

//initialize mongoDB
mongoDB.initDB((err) => {
  if (err) {
    console.log("Initialize DB error", err);
  } else {
    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
  }
});
