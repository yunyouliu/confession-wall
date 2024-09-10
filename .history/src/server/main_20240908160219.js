const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const OSS = require('ali-oss');
const fs = require('fs');
require('dotenv').config(); // 加载环境变量

const app = new Koa();
const router = new Router();

// 初始化 OSS 客户端
const client = new OSS({
  region: process.env.REGION, // 示例：'oss-cn-hangzhou'
  accessKeyId: process.env.ACCESS_KEY_ID,
  accessKeySecret: process.env.ACCESS_KEY_SECRET,
  bucket: process.env.BUCKET_NAME,
});

// 上传文件到 OSS 的 API
router.post('/upload', async (ctx) => {
  const { localFilePath, objectName } = ctx.request.body;
  
  if (!localFilePath || !objectName) {
    ctx.status = 400;
    ctx.body = { msg: '参数不完整，需要提供 localFilePath 和 objectName' };
    return;
  }

  try {
    const uploadResult = await client.put(objectName, localFilePath);
    ctx.body = {
      code: 200,
      msg: '文件上传成功',
      data: uploadResult,
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      code: 500,
      msg: '文件上传失败',
      error: error.message,
    };
  }
});

// 从 OSS 下载文件的 API
router.get('/download/:objectName', async (ctx) => {
  const { objectName } = ctx.params;

  try {
    const getResult = await client.get(objectName);

    // 保存下载的文件内容（如果需要），示例：保存到 'downloaded-file.txt'
    fs.writeFileSync('downloaded-file.txt', getResult.content);

    ctx.body = {
      code: 200,
      msg: '文件下载成功',
      data: {
        objectName,
        localPath: 'downloaded-file.txt',
      },
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      code: 500,
      msg: '文件下载失败',
      error: error.message,
    };
  }
});

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
