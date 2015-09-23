var assert = require('chai').assert;

describe('The example-test file', function () {

  it('should return 2 + 3 = 5', function () {
    //given
    var a = 2;
    var b = 3;
    var add = function(a,b){
      return a+b;
    }
    //when
    var output = add(a,b);

    //then
    assert.equal(output, 5);
  });

})