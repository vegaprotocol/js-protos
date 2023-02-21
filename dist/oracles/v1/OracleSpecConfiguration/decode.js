import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as Filter from './../Filter/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const field$pubKeys = []
  const field$filters = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$pubKeys.push(string(data))
        break

      case 2:
        field$filters.push(Filter.decode(data))
        break
    }
  }
  return { pubKeys: field$pubKeys, filters: field$filters }
}
