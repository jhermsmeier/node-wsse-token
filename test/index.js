var assert = require( 'assert' )
var WSSEToken = require( '..' )

describe( 'WSSE Token', function() {

  specify( 'constructor', function() {
    assert.doesNotThrow( function() {
      var token = new WSSEToken({
        user: 'ihatesoap',
        password: 'letthatsinkin'
      })
    })
  })

  specify( 'empty username', function() {
    assert.throws( function() {
      var token = new WSSEToken({
        user: '',
        password: 'letthatsinkin'
      })
    })
  })

  specify( 'missing username', function() {
    assert.throws( function() {
      var token = new WSSEToken({
        password: 'letthatsinkin'
      })
    })
  })

  specify( 'empty password', function() {
    assert.throws( function() {
      var token = new WSSEToken({
        user: 'ihatesoap',
        password: ''
      })
    })
  })

  specify( 'missing password', function() {
    assert.throws( function() {
      var token = new WSSEToken({
        user: 'ihatesoap',
      })
    })
  })

})
