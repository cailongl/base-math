import {arrayCheck, toNumber} from './util'

/**
 * 求和
 * @param {Array} numbers 
 */
export function plus(numbers) {
  arrayCheck(numbers, 'plus')
  return numbers.reduce((prevent, current) => prevent + toNumber(current, 0), 0)
}

/**
 * 求积
 * @param {Array} numbers
 */
export function multiplication(numbers) {
  arrayCheck(numbers, 'multiplication')
  return numbers.reduce((prevent, current) => prevent * toNumber(current, 1), 1)
}

