const express = require("express");
const bodyParser = require("body-parser");

const ApiRoutes = require("./routes/index");
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
};

setupAndStartServer();
