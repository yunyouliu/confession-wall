const koa = require("koa");
const multer = require("multer");
const app = new koa();
const Router = require("koa-router");
const bBody = require("koa-bodyparser");
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "hello world";
});
app.use(bBody());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
