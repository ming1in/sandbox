const showsRoute = require("./shows");

const constructorMethod = (app) => {
  app.use("/shows", showsRoute);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
