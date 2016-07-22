var assert = require( 'assert' )
var WSSEToken = require( '..' )

suite( 'WSSE Token', function() {

  test( 'constructor', function() {
    assert.doesNotThrow( function() {
      var token = new WSSEToken({
        user: 'ihatesoap',
        password: 'letthatsinkin'
      })
    })
  })

  test( 'empty username', function() {
    assert.throws( function() {
      var token = new WSSEToken({
        user: '',
        password: 'letthatsinkin'
      })
    })
  })

  test( 'missing username', function() {
    assert.throws( function() {
      var token = new WSSEToken({
        password: 'letthatsinkin'
      })
    })
  })

  test( 'empty password', function() {
    assert.throws( function() {
      var token = new WSSEToken({
        user: 'ihatesoap',
        password: ''
      })
    })
  })

  test( 'missing password', function() {
    assert.throws( function() {
      var token = new WSSEToken({
        user: 'ihatesoap',
      })
    })
  })

})
