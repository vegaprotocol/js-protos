import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
    }
  }

  return {}
}
