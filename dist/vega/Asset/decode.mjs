import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as AssetDetails from "./../AssetDetails/decode.mjs"
import * as Status from "./Status.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let details = {}
  let status = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        details = data
        break
      case 3:
        status = data
        break
    }
  }

  return {
    id,
    details,
    status,
  }
}
