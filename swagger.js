const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "API Documentation for Contacts Project Week 2",
  },
  host:"",
  servers: [
    { url: "http://localhost:3000", description: "Local Server" },
    { url: "https://cse341-contacts-dqby.onrender.com", description: "Render Server" }
  ],
  schemes: ["http", "https"],
};

const outputFile = "./swagger-output.json";
const routes = ["./app.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
