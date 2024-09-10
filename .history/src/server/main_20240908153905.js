const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { STS } = require('ali-oss'); // 确保使用正确的 Aliyun SDK 模块
require('dotenv').config();

const app = new Koa();
const router = new Router();

// 配置阿里云 STS
const sts = new STS({
  accessKeyId: process.env.ACCESS_KEY_ID,
  accessKeySecret: process.env.ACCESS_KEY_SECRET,
  endpoint: 'https://sts.aliyuncs.com',
  apiVersion: '2015-04-01',
});

// 获取 STS 临时凭证接口
router.get('/sts', async (ctx) => {
  try {
    const params = {
      RoleArn: process.env.ROLE_ARN,
      RoleSessionName: 'example-session',
      Policy: JSON.stringify({
        Version: '1',
        Statement: [
          {
            Effect: 'Allow',
            Action: ['oss:PutObject', 'oss:GetObject'],
            Resource: `acs:oss:*:*:${process.env.BUCKET_NAME}/*`,
          },
        ],
      }),
    };

    // 尝试用回调方式
    const response = await new Promise((resolve, reject) => {
      sts.assumeRole(params, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });

    const { Credentials } = response;

    ctx.body = {
      code: 200,
      msg: 'STS 凭证获取成功',
      data: {
        accessKeyId: Credentials.AccessKeyId,
        accessKeySecret: Credentials.AccessKeySecret,
        securityToken: Credentials.SecurityToken,
        expiration: Credentials.Expiration,
      },
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      code: 500,
      msg: '获取 STS 凭证失败',
      error: error.message,
    };
  }
});

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
