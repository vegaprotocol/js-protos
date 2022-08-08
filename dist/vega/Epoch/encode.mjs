import Writer from "protobuf-codec/encode/writer.mjs"
import { uint64 } from "protobuf-codec/encode/types.mjs"
import * as EpochTimestamps from "./../EpochTimestamps/encode.mjs"
import * as Node from "./../Node/encode.mjs"
import * as Delegation from "./../Delegation/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.seq) writer.varint(1, obj.seq, uint64)
  if (obj.timestamps) writer.bytes(2, EpochTimestamps.encode(obj.timestamps))
  if (obj.validators?.length)
    obj.validators.forEach((v) => writer.bytes(3, Node.encode(v)))
  if (obj.delegations?.length)
    obj.delegations.forEach((v) => writer.bytes(4, Delegation.encode(v)))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
