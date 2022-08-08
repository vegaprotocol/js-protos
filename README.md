# `@vegaprotocol/protos`

> Protocol Buffer messages for Vega in Javascript

## Example

```js
import * as InputData from '@vegaprotocol/protos/vega/commands/v1/InputData/encode.mjs'
import * as Transaction from '@vegaprotocol/protos/vega/commands/v1/Transaction/encode.mjs'
import * as AccountType from '@vegaprotocol/protos/vega/AccountType.mjs'

const inputData = InputData.encode({
  nonce: 10,
  command: {
    transfer: {
      fromAccountType: AccountType.ACCOUNT_TYPE_GENERAL,
      to: 'abcdefg',
      toAccountType: AccountType.ACCOUNT_TYPE_GENERAL,
      asset: 'BTC',
      amount: '1'
    }
  }
})

const tx = Transaction.encode({
  inputData: inputData,
  version: 3,
  from: {
    pubKey: 'foo'// new Uint8Array(86)
  },
  signature: {
    version: 2,
    algo: 'vega/ed25519',
    value: 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef'
  },
  proofOfWork: {
    hashFunction: 'sha3_24_rounds',
    tid: 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef'
  }
})
```

## Install

```sh
npm install @vegaprotocol/protos
```

## Contributing

Building the Javascript bindings requires `protoc` and `make` to be installed on the system.
After cloning run `npm install` and then `make dist` to generate the bindings.

`vega` is added as a git submodule. The goal is to release a new version to npm, tracking the
vega versions. To update the tracked tag, `cd vega` and checkout the desired commitish, and
commit this version in the this repository.

## License

[MIT](LICENSE)
