// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class RegisteredToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RegisteredToken entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RegisteredToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RegisteredToken", id.toString(), this);
  }

  static load(id: string): RegisteredToken | null {
    return store.get("RegisteredToken", id) as RegisteredToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}

export class UniswapExchange extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UniswapExchange entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UniswapExchange entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UniswapExchange", id.toString(), this);
  }

  static load(id: string): UniswapExchange | null {
    return store.get("UniswapExchange", id) as UniswapExchange | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get isErc777Token(): boolean {
    let value = this.get("isErc777Token");
    return value.toBoolean();
  }

  set isErc777Token(value: boolean) {
    this.set("isErc777Token", Value.fromBoolean(value));
  }
}