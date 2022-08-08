import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint32, uint64 } from "protobuf-codec/decode/types.mjs"
import * as Signature from "./../Signature/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let vegaPubKey = {}
  let ethereumAddress = {}
  let chainPubKey = {}
  let infoUrl = {}
  let country = {}
  let id = {}
  let name = {}
  let avatarUrl = {}
  let vegaPubKeyIndex = 0
  let fromEpoch = 0n
  let ethereumSignature = {}
  let vegaSignature = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        vegaPubKey = data
        break
      case 2:
        ethereumAddress = data
        break
      case 3:
        chainPubKey = data
        break
      case 4:
        infoUrl = data
        break
      case 5:
        country = data
        break
      case 6:
        id = data
        break
      case 7:
        name = data
        break
      case 8:
        avatarUrl = data
        break
      case 9:
        vegaPubKeyIndex = data
        break
      case 10:
        fromEpoch = data
        break
      case 11:
        ethereumSignature = data
        break
      case 12:
        vegaSignature = data
        break
    }
  }

  return {
    vegaPubKey,
    ethereumAddress,
    chainPubKey,
    infoUrl,
    country,
    id,
    name,
    avatarUrl,
    vegaPubKeyIndex,
    fromEpoch,
    ethereumSignature,
    vegaSignature,
  }
}
