# Read UInt [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Read an unsigned integer from `buffer`. Similar to [buf.readIntBE](https://nodejs.org/dist/latest-v10.x/docs/api/buffer.html#buffer_buf_readintbe_offset_bytelength) but without `byteLength` limitation.

## Install

```
npm i read-uint
```

## How to use?

```js
const {readUIntBE, readUIntLE} = require('read-uint');
const buf = Buffer.from([0xff, 0xfe, 0xff, 0xfd, 0xfb, 0xfa, 0xf0, 0xf1]);

readUIntBE(buf, 0);
// returns
'0xfffefffdfbfaf0f1';

readUIntLE(buf, 0);
// returns
'0xf1f0fafbfdfffe';

// same with array
const array = [0xff, 0xfe, 0xff, 0xfd, 0xfb, 0xfa, 0xf0, 0xf1];
readUIntBE(array, 0);
// returns
'0xfffefffdfbfaf0f1';

// set byte length
readUIntBE(buf, 0, 4);
// returns
'0xfffefffd';

readUIntLE(buf, 0, 4);
// returns
'0xf1f0fafb';

// convert to BigInt
const a = readUIntBE(buf, 0);
const number = BigInt(parseInt(a, 16));
```

## Environments

In old `node.js` environments that not fully supports `es2015`, `read-uint` could be used with:

```js
var readUInt = require('read-uint/legacy');
```

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/read-uint.svg?style=flat&longCache=true
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/read-uint/master.svg?style=flat&longCache=true
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/read-uint.svg?style=flat&longCache=true
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat&longCache=true
[NPMURL]:                   https://npmjs.org/package/read-uint "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/read-uint  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/read-uint "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

