/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$party = ''
  let field$currentEpochFractionOfTimeOnBook = ''
  let field$lastEpochFractionOfTimeOnBook = ''
  let field$lastEpochFeePenalty = ''
  let field$lastEpochBondPenalty = ''
  const field$hysteresisPeriodFeePenalties = []
  let field$requiredLiquidity = ''
  let field$notionalVolumeBuys = ''
  let field$notionalVolumeSells = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$party = string(data)
        break

      case 2:
        field$currentEpochFractionOfTimeOnBook = string(data)
        break

      case 3:
        field$lastEpochFractionOfTimeOnBook = string(data)
        break

      case 4:
        field$lastEpochFeePenalty = string(data)
        break

      case 5:
        field$lastEpochBondPenalty = string(data)
        break

      case 6:
        field$hysteresisPeriodFeePenalties.push(string(data))
        break

      case 7:
        field$requiredLiquidity = string(data)
        break

      case 8:
        field$notionalVolumeBuys = string(data)
        break

      case 9:
        field$notionalVolumeSells = string(data)
        break
    }
  }
  return {
    party: field$party,
    currentEpochFractionOfTimeOnBook: field$currentEpochFractionOfTimeOnBook,
    lastEpochFractionOfTimeOnBook: field$lastEpochFractionOfTimeOnBook,
    lastEpochFeePenalty: field$lastEpochFeePenalty,
    lastEpochBondPenalty: field$lastEpochBondPenalty,
    hysteresisPeriodFeePenalties: field$hysteresisPeriodFeePenalties,
    requiredLiquidity: field$requiredLiquidity,
    notionalVolumeBuys: field$notionalVolumeBuys,
    notionalVolumeSells: field$notionalVolumeSells
  }
}
