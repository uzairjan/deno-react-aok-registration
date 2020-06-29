import { Application, Router  } from "https://deno.land/x/oak/mod.ts";
import { jwtMiddlewareApplication } from "https://raw.githubusercontent.com/halvardssm/oak-middleware-jwt/master/mod.ts"
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

const app = new Application();
const router = new Router();



app.use(router.routes());
app.use(router.allowedMethods());

router.post('/api/register', async (ctx) => {
    const body = await ctx.request.body();
    const values = body.value;
    ctx.response.body = values;
});


app.use(async (ctx, next) => {
    await next();
    console.log(`${ctx.request.method} ${ctx.request.url}`);
});

// app.use((ctx) => {
//     ctx.response.body = "Hello world";
// });`

await app.listen({port:8000});