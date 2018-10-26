const expect = require('expect.js')

const baseMath = require('../dist/index')

describe('单元测试', function() {
  describe('baseMath.plus 加法', function() {
    it('baseMath.plus([1,2,3,4]) === 10', function() {
      expect(baseMath.plus([1,2,3,4])).to.equal(10)
    })
    it('baseMath.plus([1, 2, 3, null, undefined, {}, [], true, NaN, "1", "a11"] === 6', function () {
      expect(baseMath.plus([1, 2, 3, null, undefined, {}, [], true, NaN, "1", "a11"])).to.equal(6)
    })
    it('baseMath.plus(["a22", "1,2", "3.222a", "Function", 1]) === 1', function() {
      expect(baseMath.plus(["a22", "1,2", "3.222a", Function, 1])).to.equal(1)
    })
  })
  describe('baseMath.multiplication 乘法', function () {
    it('baseMath.multiplication([1,2,3,4]) === 24', function () {
      expect(baseMath.multiplication([1, 2, 3, 4])).to.equal(24)
    })
    it('baseMath.multiplication([1, 2, 3, null, undefined, {}, [], true, NaN, "1", "a11"] === 6', function () {
      expect(baseMath.multiplication([1, 2, 3, null, undefined, {}, [], true, NaN, "1", "a11"])).to.equal(6)
    })
    it('baseMath.multiplication(["a22", "1,2", "3.222a", "Function", 1]) === 1', function () {
      expect(baseMath.multiplication(["a22", "1,2", "3.222a", Function, 1])).to.equal(1)
    })
  })
})