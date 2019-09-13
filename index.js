const DASH_REGEXP = /-/g
const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const BASE = BigInt(BASE58.length)
const ONE = BigInt(1)
const ZERO = BigInt(0)
const UUID_INDEXES = [0, 8, 12, 16, 20]

function encode(uuid) {
  try {
    let b = BigInt('0x' + uuid.replace(DASH_REGEXP, ''))
    let u58 = ''
    do {
      u58 = BASE58[b % BASE] + u58
      b = b / BASE
    } while (b > 0)
    return u58
  } catch (e) {
    return uuid
  }
}

function decode(uuid58) {
  try {
    const parts = Array.from(uuid58).map(x => BASE58.indexOf(x))
    if (parts.some(inc => inc < 0)) return uuid58
    const max = uuid58.length - 1
    const b = parts.reduce(
      (acc, inc, pos) => (acc + BigInt(inc)) * (pos < max ? BASE : ONE),
      ZERO
    )
    const hex = b.toString(16).padStart(32, '0')
    return UUID_INDEXES.map((p, i, a) => hex.substring(p, a[i + 1])).join('-')
  } catch (e) {
    return uuid58
  }
}

module.exports = {
  encode,
  decode,
  convertUuidToUuid58: encode,
  convertUuid58ToUuid: decode,
  to58: encode,
  toU: decode,
}
