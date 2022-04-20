const productsRouter = require("./productsRouter");
const usersRouter = require("./usersRouter");

const routerApi = app => {
  app.use("/products", productsRouter);
  app.use("/users", usersRouter);
}

module.exports = routerApi;
