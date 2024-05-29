const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsdoc = YAML.load("./api.yaml");
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));

app.get("/string", (req, res) => {
  res.status(200).send("This  is a string");
});

app.get("/user", (req, res) => {
  res.status(200).send({ id: 1, name: "Tom" });
});
app.listen(4000, () => console.log("UP & Running"));
