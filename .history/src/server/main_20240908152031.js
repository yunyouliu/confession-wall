const koa = require("koa");

const app = new koa();

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
