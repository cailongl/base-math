const toString = Object.prototype.toString

export const getType = x => toString.call(x).slice(8, -1)

export function toNumber(num, defaultNumer = 0) {
  if (`${num}` === 'NaN' || getType(num) !== 'Number') return defaultNumer
  return +num
}

export function throwError(text) {
  throw new Error(text)
}

export function arrayCheck(arg, funName) {
  if (getType(arg) !== 'Array') throwError(`${funName} function argument must be an array`)
}


export function test() {
  return null
}