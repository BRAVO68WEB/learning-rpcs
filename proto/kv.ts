/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kvPackage";

export interface GetRequest {
  key: string;
}

export interface GetResponse {
  value: string;
}

export interface PutRequest {
  key: string;
  value: string;
}

export interface PutResponse {
  value: string;
}

export interface DeleteRequest {
  key: string;
}

export interface DeleteResponse {
  value: string;
}

function createBaseGetRequest(): GetRequest {
  return { key: "" };
}

export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    return { key: isSet(object.key) ? String(object.key) : "" };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRequest>, I>>(base?: I): GetRequest {
    return GetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetRequest>, I>>(object: I): GetRequest {
    const message = createBaseGetRequest();
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { value: "" };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResponse {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.value = object.value ?? "";
    return message;
  },
};

function createBasePutRequest(): PutRequest {
  return { key: "", value: "" };
}

export const PutRequest = {
  encode(message: PutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PutRequest {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: PutRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<PutRequest>, I>>(base?: I): PutRequest {
    return PutRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PutRequest>, I>>(object: I): PutRequest {
    const message = createBasePutRequest();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBasePutResponse(): PutResponse {
  return { value: "" };
}

export const PutResponse = {
  encode(message: PutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PutResponse {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: PutResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<PutResponse>, I>>(base?: I): PutResponse {
    return PutResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PutResponse>, I>>(object: I): PutResponse {
    const message = createBasePutResponse();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDeleteRequest(): DeleteRequest {
  return { key: "" };
}

export const DeleteRequest = {
  encode(message: DeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteRequest {
    return { key: isSet(object.key) ? String(object.key) : "" };
  },

  toJSON(message: DeleteRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteRequest>, I>>(base?: I): DeleteRequest {
    return DeleteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteRequest>, I>>(object: I): DeleteRequest {
    const message = createBaseDeleteRequest();
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseDeleteResponse(): DeleteResponse {
  return { value: "" };
}

export const DeleteResponse = {
  encode(message: DeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteResponse {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: DeleteResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResponse>, I>>(base?: I): DeleteResponse {
    return DeleteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteResponse>, I>>(object: I): DeleteResponse {
    const message = createBaseDeleteResponse();
    message.value = object.value ?? "";
    return message;
  },
};

export type KVServiceService = typeof KVServiceService;
export const KVServiceService = {
  get: {
    path: "/kvPackage.KVService/get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRequest) => Buffer.from(GetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRequest.decode(value),
    responseSerialize: (value: GetResponse) => Buffer.from(GetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetResponse.decode(value),
  },
  put: {
    path: "/kvPackage.KVService/put",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PutRequest) => Buffer.from(PutRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PutRequest.decode(value),
    responseSerialize: (value: PutResponse) => Buffer.from(PutResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PutResponse.decode(value),
  },
  delete: {
    path: "/kvPackage.KVService/delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteRequest) => Buffer.from(DeleteRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteRequest.decode(value),
    responseSerialize: (value: DeleteResponse) => Buffer.from(DeleteResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteResponse.decode(value),
  },
} as const;

export interface KVServiceServer extends UntypedServiceImplementation {
  get: handleUnaryCall<GetRequest, GetResponse>;
  put: handleUnaryCall<PutRequest, PutResponse>;
  delete: handleUnaryCall<DeleteRequest, DeleteResponse>;
}

export interface KVServiceClient extends Client {
  get(request: GetRequest, callback: (error: ServiceError | null, response: GetResponse) => void): ClientUnaryCall;
  get(
    request: GetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetResponse) => void,
  ): ClientUnaryCall;
  put(request: PutRequest, callback: (error: ServiceError | null, response: PutResponse) => void): ClientUnaryCall;
  put(
    request: PutRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PutResponse) => void,
  ): ClientUnaryCall;
  put(
    request: PutRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PutResponse) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteRequest,
    callback: (error: ServiceError | null, response: DeleteResponse) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteResponse) => void,
  ): ClientUnaryCall;
  delete(
    request: DeleteRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteResponse) => void,
  ): ClientUnaryCall;
}

export const KVServiceClient = makeGenericClientConstructor(KVServiceService, "kvPackage.KVService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): KVServiceClient;
  service: typeof KVServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
