import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as PropertyKey from "./../PropertyKey/encode.mjs"
import * as Condition from "./../Condition/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.key) writer.bytes(1, PropertyKey.encode(obj.key))
  if (obj.conditions?.length)
    obj.conditions.forEach((v) => writer.bytes(2, Condition.encode(v)))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
