import { RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.7.0/mod.ts";
import { hashSync, compareSync } from "https://deno.land/x/bcrypt@v0.2.1/mod.ts";
import { makeJwt, setExpiration, Jose } from "https://deno.land/x/djwt@v0.9.0/create.ts";
import db from './../database/config.ts';


//define user schema
interface userSchema {
    _id: { $oid: string },
    email: string,
    password: string

}

const database = db.getDatabase();
const users = database.collection('users');

export const register = async (ctx: RouterContext) => {
    try {
        const body = await ctx.request.body();
        const { email, username, password } = body.value;
        console.log(body);
        if (!Object.keys(body.value).length) {
            ctx.response.status = 400;
            ctx.response.body = { "error": "Please provide details to login" };
        } else {
            const user = await users.findOne({ email: email });
            if (user) {
                ctx.response.status == 401;
                ctx.response.body = { "error": "Email already taken" };
            } else {
                if ("email" in body.value) {
                    ctx.response.status = 400;
                    ctx.response.body = { "error": "Email is required " };
                    return
                } else if ("password" in  body.value) {
                    if (password.length < 5) {
                        ctx.response.status = 400;
                        ctx.response.body = { "error": "password must greater than 5 characters" };
                        return
                    } 
                }else{
                    ctx.response.status = 400;
                    ctx.response.body = { "error": "password is required " };
                    return
                }
                
                    const user = await users.insertOne({
                        "username": username,
                        "email": email,
                        "password": password
                    });
                    ctx.response.body = user;
                    return;
            }
        }
    } catch (error) {
        ctx.response.status = 500;
        ctx.response.body = { err: error.toString() };
    }
}
export const login = async (ctx: RouterContext) => {
    const body = await ctx.request.body();
    console.log("i am register");
    ctx.response.body = "in register";
}