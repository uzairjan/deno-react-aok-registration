import { Application, Router, RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import "https://deno.land/x/dotenv@v0.4.1/load.ts";
import { login, register } from './routes/routes.ts';

const app    = new Application();
const router = new Router();
router
    .post('/api/login',login)
    .post('/api/register',register);

app.use(async (ctx, next) => {
    await next();
    console.log(`${ctx.request.method} ${ctx.request.url}`);
});
app.addEventListener('error', evt => {
    console.log(evt.error);
 });
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port:8000});
console.log("Server is listening on port: 8000");