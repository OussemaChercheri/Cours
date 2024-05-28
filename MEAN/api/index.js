const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsdoc = YAML.load("./api.yaml");
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));
app.listen(4000, () => console.log("UP & Running"));
