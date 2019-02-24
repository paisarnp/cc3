const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(serve('public'))
   .use(bodyParser());

const PORT = 3000

app.listen(PORT)
console.log(`Service is running on port ${PORT}.`)