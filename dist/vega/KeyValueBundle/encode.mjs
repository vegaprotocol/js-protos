import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as StateVarValue from "./../StateVarValue/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.key) writer.bytes(1, obj.key, string)
  if (obj.tolerance) writer.bytes(2, obj.tolerance, string)
  if (obj.value) writer.bytes(3, StateVarValue.encode(obj.value))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
