import reader from "protobuf-codec/decode/reader.js"
import {} from "protobuf-codec/decode/types.js"
import * as LedgerEntry from "./../LedgerEntry/decode.js"
import * as TransferBalance from "./../TransferBalance/decode.js"

export function _decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const transfers = []
  const balances = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        transfers.push(LedgerEntry.decode(data))
        break
      case 2:
        balances.push(TransferBalance.decode(data))
        break
    }
  }

  return {
    transfers,
    balances,
  }
}

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const transfers = []
  const balances = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        transfers.push(LedgerEntry.decode(data))
        break
      case 2:
        balances.push(TransferBalance.decode(data))
        break
    }
  }
  return { transfers, balances }
}
