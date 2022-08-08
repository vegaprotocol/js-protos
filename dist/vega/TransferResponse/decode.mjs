import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as LedgerEntry from "./../LedgerEntry/decode.mjs"
import * as TransferBalance from "./../TransferBalance/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const transfers = []
  const balances = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        transfers.push(data)
        break
      case 2:
        balances.push(data)
        break
    }
  }

  return {
    transfers,
    balances,
  }
}
