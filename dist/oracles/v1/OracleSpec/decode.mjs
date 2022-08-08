import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"
import * as Filter from "./../Filter/decode.mjs"
import * as Status from "./Status.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let createdAt = 0n
  let updatedAt = 0n
  const pubKeys = []
  const filters = []
  let status = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        createdAt = data
        break
      case 3:
        updatedAt = data
        break
      case 4:
        pubKeys.push(data)
        break
      case 5:
        filters.push(data)
        break
      case 6:
        status = data
        break
    }
  }

  return {
    id,
    createdAt,
    updatedAt,
    pubKeys,
    filters,
    status,
  }
}
