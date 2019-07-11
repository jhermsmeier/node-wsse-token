# WSSE Token
[![npm](https://img.shields.io/npm/v/wsse-token.svg?style=flat-square)](https://npmjs.com/wsse-token)
[![npm license](https://img.shields.io/npm/l/wsse-token.svg?style=flat-square)](https://npmjs.com/wsse-token)
[![npm downloads](https://img.shields.io/npm/dm/wsse-token.svg?style=flat-square)](https://npmjs.com/wsse-token)
[![build status](https://img.shields.io/travis/jhermsmeier/node-wsse-token.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-wsse-token)

Web Services Security Extension (WSSE) Username Authentication Token

## Install via [npm](https://npmjs.com)

```sh
npm install --save wsse-token
```

## Usage

```js
var WSSEToken = require( 'wsse-token' )
```

```js
var token = new WSSEToken({
  // Credentials
  user: 'example',
  password: 'secret',
  // Byte-length and encoding of the nonce (optional)
  nonceBytes: 16,
  nonceEncoding: 'hex',
  // Digest options (optional)
  digestAlgorithm: 'sha1',
  digestEncoding: 'hex',
  digestBase64: true,
})
```

```js
token.toString()
```

```js
'UsernameToken Username="example", PasswordDigest="dc8b87d1786f37261ae2a5f7f0940fd650635d4a", Nonce="69dc375f3c5d6b24a45801962ad74812", Created="2019-07-11T16:40:43.125Z"'
```
