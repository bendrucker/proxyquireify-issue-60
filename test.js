var test = require('tape')
var proxyquire = require('proxyquireify')(require)

test(function (t) {
  var result = proxyquire('./', {
    'foo': function () {
      return 'baz'
    }
  })

  t.equal(result, 'baz', 'proxies with options.paths set')
})
