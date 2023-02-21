import reader from 'protobuf-codec/decode/reader'
import { string, int64 } from 'protobuf-codec/decode/types'
import * as Filter from './../Filter/decode.js'
import * as Status from './Status.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$id = ''
  let field$createdAt = 0n
  let field$updatedAt = 0n
  const field$pubKeys = []
  const field$filters = []
  let field$status = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$id = string(data)
        break

      case 2:
        field$createdAt = int64(data)
        break

      case 3:
        field$updatedAt = int64(data)
        break

      case 4:
        field$pubKeys.push(string(data))
        break

      case 5:
        field$filters.push(Filter.decode(data))
        break

      case 6:
        field$status = Status.decode(data)
        break
    }
  }
  return {
    id: field$id,
    createdAt: field$createdAt,
    updatedAt: field$updatedAt,
    pubKeys: field$pubKeys,
    filters: field$filters,
    status: field$status
  }
}
