import convertToRoman from './index'

const assert = (test) => expect(test).toBeTruthy()
assert.deepEqual = (test, arr) => expect(test).toEqual(arr)
assert.deepStrictEqual = (test, arr) => expect(test).toEqual(arr)

it(`convertToRoman(2) doit retourner "II".`, () => {
  assert.deepEqual(convertToRoman(2), 'II')
})

it(`convertToRoman(3) doit retourner "III".`, () => {
  assert.deepEqual(convertToRoman(3), 'III')
})

it(`convertToRoman(4) doit retourner "IV".`, () => {
  assert.deepEqual(convertToRoman(4), 'IV')
})

it(`convertToRoman(5) doit retourner "V".`, () => {
  assert.deepEqual(convertToRoman(5), 'V')
})

it(`convertToRoman(9) doit retourner "IX".`, () => {
  assert.deepEqual(convertToRoman(9), 'IX')
})

it(`convertToRoman(12) doit retourner "XII".`, () => {
  assert.deepEqual(convertToRoman(12), 'XII')
})

it(`convertToRoman(16) doit retourner "XVI".`, () => {
  assert.deepEqual(convertToRoman(16), 'XVI')
})

it(`convertToRoman(29) doit retourner "XXIX".`, () => {
  assert.deepEqual(convertToRoman(29), 'XXIX')
})

it(`convertToRoman(44) doit retourner "XLIV".`, () => {
  assert.deepEqual(convertToRoman(44), 'XLIV')
})

it(`convertToRoman(45) doit retourner "XLV".`, () => {
  assert.deepEqual(convertToRoman(45), 'XLV')
})

it(`convertToRoman(68) doit retourner "LXVIII"`, () => {
  assert.deepEqual(convertToRoman(68), 'LXVIII')
})

it(`convertToRoman(83) doit retourner "LXXXIII"`, () => {
  assert.deepEqual(convertToRoman(83), 'LXXXIII')
})

it(`convertToRoman(97) doit retourner "XCVII"`, () => {
  assert.deepEqual(convertToRoman(97), 'XCVII')
})

it(`convertToRoman(99) doit retourner "XCIX"`, () => {
  assert.deepEqual(convertToRoman(99), 'XCIX')
})

it(`convertToRoman(400) doit retourner "CD"`, () => {
  assert.deepEqual(convertToRoman(400), 'CD')
})

it(`convertToRoman(500) doit retourner "D"`, () => {
  assert.deepEqual(convertToRoman(500), 'D')
})

it(`convertToRoman(501) doit retourner "DI"`, () => {
  assert.deepEqual(convertToRoman(501), 'DI')
})

it(`convertToRoman(649) doit retourner "DCXLIX"`, () => {
  assert.deepEqual(convertToRoman(649), 'DCXLIX')
})

it(`convertToRoman(798) doit retourner "DCCXCVIII"`, () => {
  assert.deepEqual(convertToRoman(798), 'DCCXCVIII')
})

it(`convertToRoman(891) doit retourner "DCCCXCI"`, () => {
  assert.deepEqual(convertToRoman(891), 'DCCCXCI')
})

it(`convertToRoman(1000) doit retourner "M"`, () => {
  assert.deepEqual(convertToRoman(1000), 'M')
})

it(`convertToRoman(1004) doit retourner "MIV"`, () => {
  assert.deepEqual(convertToRoman(1004), 'MIV')
})

it(`convertToRoman(1006) doit retourner "MVI"`, () => {
  assert.deepEqual(convertToRoman(1006), 'MVI')
})

it(`convertToRoman(1023) doit retourner "MXXIII"`, () => {
  assert.deepEqual(convertToRoman(1023), 'MXXIII')
})

it(`convertToRoman(2014) doit retourner "MMXIV"`, () => {
  assert.deepEqual(convertToRoman(2014), 'MMXIV')
})

it(`convertToRoman(3999) doit retourner "MMMCMXCIX"`, () => {
  assert.deepEqual(convertToRoman(3999), 'MMMCMXCIX')
})
