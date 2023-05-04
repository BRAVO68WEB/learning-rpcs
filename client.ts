import 'dotenv/config'

import { ServiceError, credentials, Metadata } from "@grpc/grpc-js";
import { AuthServiceClient, LoginRequest, LoginResult } from "./proto/auth";
import { KVServiceClient, GetRequest, GetResponse, PutRequest, PutResponse, DeleteRequest, DeleteResponse } from "./proto/kv";

const loginRequest: LoginRequest = {
    username: "admin",
    password: "qwerty"
};

const metadata = new Metadata();
metadata.set('Authorization', `Bearer ${process.env.API_KEY}`);

const auth_client = new AuthServiceClient(
    "localhost:" + process.env.PORT, credentials.createInsecure()
);

const kv_client = new KVServiceClient(
    "localhost:" + process.env.PORT, credentials.createInsecure(),
);

auth_client.login(loginRequest, (err: ServiceError | null, response: LoginResult) => {
    console.log(response);
})

const initGgetRequest: GetRequest = {
    key: "hello"
};

const getRequest: GetRequest = {
    key: "key1"
};

kv_client.get(initGgetRequest, metadata, (err: ServiceError | null, response: GetResponse) => {
    console.log(response);
});

const putRequest: PutRequest = {
    key: "key1",
    value: "value1"
};

kv_client.put(putRequest, metadata, (err: ServiceError | null, response: PutResponse) => {
    console.log(response);
});

kv_client.get(getRequest, metadata, (err: ServiceError | null, response: GetResponse) => {
    console.log(response);
});

const deleteRequest: DeleteRequest = {
    key: "key1"
};

kv_client.delete(deleteRequest, metadata, (err: ServiceError | null, response: DeleteResponse) => {
    console.log(response);
});

kv_client.close();
auth_client.close();