const koa = require("koa");
const multer = require("multer");
const app = new koa();




app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
