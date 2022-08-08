import Writer from "protobuf-codec/encode/writer.mjs"
import { bytes } from "protobuf-codec/encode/types.mjs"
import * as OracleSource from "./OracleSource.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.source) writer.varint(1, obj.source, OracleSource)
  if (obj.payload) writer.bytes(2, obj.payload, bytes)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
