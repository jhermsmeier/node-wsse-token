var crypto = require( 'crypto' )

/**
 * WSSEToken
 * @constructor
 * @param {Object} options
 * @return {WSSEToken}
 */
function WSSEToken( options ) {

  if( !(this instanceof WSSEToken) )
    return new WSSEToken( options )

  if( !(options.user || options.username) )
    throw new Error( 'Empty username' )

  if( !options.password )
    throw new Error( 'Empty password' )

  this.user = options.user || options.username
  this.password = options.password

  this.nonceBytes = options.nonceBytes || 16
  this.nonceEncoding = options.nonceEncoding || 'hex'

  this.digestAlgorithm = options.digestAlgorithm || 'sha1'
  this.digestEncoding = options.digestEncoding || 'hex'
  this.digestBase64 = options.digestBase64 != null ?
    options.digestBase64 : true

}

function base64( value ) {
  return new Buffer( value )
    .toString( 'base64' )
}

/**
 * WSSEToken prototype
 * @type {Object}
 */
WSSEToken.prototype = {

  constructor: WSSEToken,

  getTimestamp: function() {
    return new Date().toISOString()
  },

  getNonce: function( encoding ) {
    return crypto.randomBytes( this.nonceBytes )
      .toString( encoding || this.nonceEncoding )
  },

  getDigest: function( nonce, timestamp, encoding ) {
    return crypto.createHash( this.digestAlgorithm )
      .update( nonce + timestamp + this.password )
      .digest( encoding || this.digestEncoding )
  },

  toString: function() {

    var nonce = this.getNonce()
    var timestamp = this.getTimestamp()
    var digest = this.getDigest( nonce, timestamp )

    if( this.digestBase64 ) {
      digest = base64( digest )
    }

    return 'UsernameToken Username="' + this.user +
      '", PasswordDigest="' + digest +
      '", Nonce="' + nonce +
      '", Created="' + timestamp + '"'

  },

}

// Exports
module.exports = WSSEToken
