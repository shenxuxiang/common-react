var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

app.use(router.routes())
   .use(router.allowedMethods());

router.get('/api/one', (ctx, next) => {
    ctx.body = {
        name: 'shenxuxiang',
        age: 26,
        sex: 'man'
    }
})

app.listen(8080)
