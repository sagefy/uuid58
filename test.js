const {
  encode,
  decode,
  convertUuidToUuid58,
  convertUuid58ToUuid,
  to58,
  toU,
} = require('./index')

const xuuid = '7a2957d2-b79c-48c6-9771-270aed712fd8'
const xuuid58 = 'G5w1tJ2db6LJg8PxiEvkdm'

describe('uuid58', () => {
  it('should convert a uuid to uuid58', () => {
    expect(encode(xuuid)).toBe(xuuid58)
  })

  it('should convert an uppercase uuid to uuid58', () => {
    expect(encode(xuuid.toUpperCase())).toBe(xuuid58)
  })

  it('should ignore already encoded', () => {
    expect(encode(xuuid58)).toBe(xuuid58)
  })

  it('should convert a uuid58 to uuid', () => {
    expect(decode(xuuid58)).toBe(xuuid)
  })

  it('should ignore already decoded', () => {
    expect(decode(xuuid)).toBe(xuuid)
  })

  it('should have alias convertUuidToUuid58', () => {
    expect(convertUuidToUuid58).toBe(encode)
  })

  it('should have alias convertUuidToUuid58', () => {
    expect(convertUuid58ToUuid).toBe(decode)
  })

  it('should have alias convertUuidToUuid58', () => {
    expect(to58).toBe(encode)
  })

  it('should have alias convertUuidToUuid58', () => {
    expect(toU).toBe(decode)
  })
})
