import { RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.7.0/mod.ts";
import { hashSync, compareSync } from "https://deno.land/x/bcrypt@v0.2.1/mod.ts";
import { makeJwt, setExpiration, Jose } from "https://deno.land/x/djwt@v0.9.0/create.ts";



export const login = async (ctx: RouterContext) => {
    const body = await ctx.request.body();
    console.log(body.value);
    ctx.response.body= body.value;
}

export const register = async (ctx: RouterContext) => {
    const body = await ctx.request.body();
    console.log("i am register");
    ctx.response.body = "in register";
}