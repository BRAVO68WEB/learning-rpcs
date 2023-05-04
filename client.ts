import 'dotenv/config'

import { rpcClient } from "typed-rpc";
import type { MyStatus } from "./statusService";

const client = rpcClient<MyStatus>("http://localhost:3000/api", {
    credentials: "include",
    getHeaders() {
        return {
            "Authorization": `Bearer ${process.env.API_KEY} 1`
        }
    }
});

setTimeout(async () => {
    try {
        console.log(await client.getStatus());
        console.log(await client.setStatus("Listening to music"));
        console.log(await client.getStatus());

        console.log(await client.storeData("name", "John Doe"));
        console.log(await client.getData("name"));
        console.log(await client.deleteData("name"));
        console.log(await client.getData("name"));

        console.log(await client.storeData("name", "John Doe"));
        console.log(await client.storeData("age", 20));
        console.log(await client.getStore());

        console.log(await client.getStoreKeys());
        console.log(await client.getStoreValues());
        console.log(await client.getStoreEntries());
        console.log(await client.getStoreSize());

        console.log(await client.getStoreHas("name"));
        console.log(await client.getStoreIncludes(20));

        console.log(await client.clearStore());
        console.log(await client.getStore());

        console.log(await client.getStatus());
        console.log(await client.setStatus("Coding"));
        console.log(await client.getStatus());

        setTimeout(async () => {
            console.log(await client.getStatus());
            console.log(await client.setStatus("Sleeping"));
            console.log(await client.getStatus());
        }, 5000);
    }
    catch (e: any) {
        console.debug(e);
    }
}, 2000);