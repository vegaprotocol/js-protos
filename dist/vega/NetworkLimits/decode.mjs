import reader from "protobuf-codec/decode/reader.mjs"
import { bool, uint32, int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let canProposeMarket = false
  let canProposeAsset = false
  let bootstrapFinished = false
  let proposeMarketEnabled = false
  let proposeAssetEnabled = false
  let bootstrapBlockCount = 0
  let genesisLoaded = false
  let proposeMarketEnabledFrom = 0n
  let proposeAssetEnabledFrom = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        canProposeMarket = data
        break
      case 2:
        canProposeAsset = data
        break
      case 3:
        bootstrapFinished = data
        break
      case 4:
        proposeMarketEnabled = data
        break
      case 5:
        proposeAssetEnabled = data
        break
      case 6:
        bootstrapBlockCount = data
        break
      case 7:
        genesisLoaded = data
        break
      case 8:
        proposeMarketEnabledFrom = data
        break
      case 9:
        proposeAssetEnabledFrom = data
        break
    }
  }

  return {
    canProposeMarket,
    canProposeAsset,
    bootstrapFinished,
    proposeMarketEnabled,
    proposeAssetEnabled,
    bootstrapBlockCount,
    genesisLoaded,
    proposeMarketEnabledFrom,
    proposeAssetEnabledFrom,
  }
}
