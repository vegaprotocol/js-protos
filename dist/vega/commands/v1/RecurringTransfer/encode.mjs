import Writer from "protobuf-codec/encode/writer.mjs"
import { uint64, string } from "protobuf-codec/encode/types.mjs"
import * as DispatchStrategy from "./../../../DispatchStrategy/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.startEpoch) writer.varint(1, obj.startEpoch, uint64)
  if (obj.factor) writer.bytes(3, obj.factor, string)
  if (obj.dispatchStrategy)
    writer.bytes(4, DispatchStrategy.encode(obj.dispatchStrategy))

  if (obj._end_epoch) {
    const _o = obj._end_epoch
    if (_o.endEpoch) writer.varint(2, _o.endEpoch, uint64)
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
