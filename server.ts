import "dotenv/config";

import { Server, ServerCredentials, ServerUnaryCall, sendUnaryData} from "@grpc/grpc-js";
import { LoginCode, LoginRequest, LoginResult, AuthServiceService } from "./proto/auth";
import { GetRequest, GetResponse, PutRequest, PutResponse, DeleteRequest, DeleteResponse, KVServiceService } from "./proto/kv";

const port = process.env.PORT || 8080;

export const KeyStore : any = {
    hello: "world",
}

const users = [
    { id: 0, username: "admin", password: "qwerty" }
];

const login = (
    call: ServerUnaryCall<LoginRequest, LoginResult>,
    callback: sendUnaryData<LoginResult>
) => {
    const user = users.find((user) => 
        user.username === call.request.username && 
        user.password === call.request.password
    );

    if (user) {
        const result: LoginResult = {
            loginCode: LoginCode.SUCCESS,
            token: "RandomSecretToken",
        };
        callback(null, result);
    } else {
        const result: LoginResult = {
            loginCode: LoginCode.FAIL,
        };
        callback(null, result);
    }
}

const get = (
    call: ServerUnaryCall<GetRequest, GetResponse>,
    callback: sendUnaryData<GetResponse>
) => {
    const key = call.request.key;
    const value = KeyStore[key];

    if(!value) {
        const error = new Error("Key not found");
        callback(error, null);
        return;
    }

    const result: GetResponse = { 
        value: value
    };
    callback(null, result);
}

const put = (
    call: ServerUnaryCall<PutRequest, PutResponse>,
    callback: sendUnaryData<PutResponse>
) => {
    let token = call.metadata.toJSON()["authorization"];
    if(!token) {
        const error = new Error("Unauthorized");
        callback(error, null);
        return;
    }
    if(token.toString().split(" ")[1] != process.env.API_KEY) {
        const error = new Error("Unauthorized");
        callback(error, null);
        return;
    }
    const key = call.request.key;
    const value = call.request.value;

    KeyStore[key] = value;

    const result: PutResponse = {
        value: value
    };
    callback(null, result);
}

const del = (
    call: ServerUnaryCall<DeleteRequest, DeleteResponse>,
    callback: sendUnaryData<DeleteResponse>
) => {
    const key = call.request.key;
    const value = KeyStore[key];
    if(!value) {
        const error = new Error("Key not found");

        callback(error, null);
        return;
    }

    delete KeyStore[key];

    const result: DeleteResponse = {
        value: value
    };
    callback(null, result);
}

const server = new Server();

server.addService(AuthServiceService, { login })
server.addService(KVServiceService, { get, put, delete: del })

server.bindAsync("localhost:" + port, ServerCredentials.createInsecure(), () => {
    server.start();
    console.log("Server started, listening localhost:" + port);
});