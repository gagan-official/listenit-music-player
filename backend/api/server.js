const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/product/:resource/:id/show": "/:resource/:id",
  })
);
server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;

// Used reference from this repo: https://github.com/SofiDevO/alurageek-API/blob/sofidev/README.md