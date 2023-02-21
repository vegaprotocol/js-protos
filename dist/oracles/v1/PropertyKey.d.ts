import { Type } from './PropertyKey/Type'

export * from './PropertyKey/encode'
export * from './PropertyKey/decode'
export * as Type from './PropertyKey/Type'

export type PropertyKey = {
  name: string
  type: Type
}
