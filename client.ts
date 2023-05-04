import { ServiceError, credentials } from "@grpc/grpc-js";
import { AuthServiceClient, LoginRequest, LoginResult } from "./protos/auth";
import { KVServiceClient, GetRequest, GetResponse, PutRequest, PutResponse, DeleteRequest, DeleteResponse } from "./protos/kv";


const loginRequest: LoginRequest = {
    username: "admin",
    password: "qwerty"
};

const auth_client = new AuthServiceClient(
    "localhost:8080", credentials.createInsecure()
);

const kv_client = new KVServiceClient(
    "localhost:8080", credentials.createInsecure()
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

kv_client.get(initGgetRequest, (err: ServiceError | null, response: GetResponse) => {
    console.log(response);
});

const putRequest: PutRequest = {
    key: "key1",
    value: "value1"
};

kv_client.put(putRequest, (err: ServiceError | null, response: PutResponse) => {
    console.log(response);
});

kv_client.get(getRequest, (err: ServiceError | null, response: GetResponse) => {
    console.log(response);
});

const deleteRequest: DeleteRequest = {
    key: "key1"
};

kv_client.delete(deleteRequest, (err: ServiceError | null, response: DeleteResponse) => {
    console.log(response);
});