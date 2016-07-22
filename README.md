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
  user: 'ihatesoap',
  password: 'letthatsinkin'
})
```

```js
token.toString()
```

```js
'UsernameToken Username="ihatesoap", PasswordDigest="ZTQwOGZiMjQzZjQ2YWYxZjczOTVmYmY5ZDMzZTBiYjhmNjg4ZDliYw==", Nonce="3fb1ee9a37018d1ad57f76f2b14d5e90", Created="2016-07-22T16:35:04.163Z"'
```
