const smallest = require('../smallest');
const assert = require('chai').assert;
describe('SmallestElement Of An Array',function(){
    it('Function Shuld Return smallest Of An Array',function(){
        assert.equal(smallest([1,-2,-1,-5]),-5);
        assert.equal(smallest([1]),1);
        assert.equal(smallest([]),null);
        assert.equal(smallest([-10,-2,-1,{}]),-10);
    });
    it('Function Shuld Return A Type Error',function(){
        assert.equal(smallest(),'TypeError: smallest() expects an array parameter');
    });
})