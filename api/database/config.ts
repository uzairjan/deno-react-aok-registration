import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();

client.connectWithUri("mongodb://<denoland>:<denoland687>@ds259738.mlab.com:59738/denologin");

// mongodb://<denoland>:<denoland687>@ds259738.mlab.com:59738/denologin