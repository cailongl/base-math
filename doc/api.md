# [base-math文档](http://git.dtwave-inc.com/cailong.lcl/base-math/blob/master/doc/api.md)

这是基础的数学库，旨在解决数据较多的时候的计算问题

### API

<a name="plus" href="#plus">#<a/> baseMath.plus(array)

数组内所有`number类型`元素的求和，遇到`非number类型`或`NaN`，视为`0`处理

```js
baseMath.plus([1,2,3,4,5,6,7,8,9,null, undefined, {}]) // get 45

```

<a name="plus" href="#plus">#<a/> baseMath.multiplication(array)

数组内所有`number类型`元素的求积，遇到`非number类型`或`NaN`，视为`1`处理

```js
baseMath.multiplication([1, 2, 3, null, undefined, {}, [], true, NaN, "1", "a11"])) // get 6
```