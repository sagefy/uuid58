const DASH_REGEXP = /-/g
const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const BASE = BigInt(BASE58.length)
const ONE = BigInt(1)
const ZERO = BigInt(0)
const UUID_INDEXES = [0, 8, 12, 16, 20]

function encode(uuid) {
  try {
    let b = BigInt('0x' + uuid.replace(DASH_REGEXP, ''))
    let output = ''
    do {
      output = BASE58[b % BASE] + output
      b = b / BASE
    } while (b > 0)
    return output
  } catch (e) {
    return uuid
  }
}

function decode(uuid58) {
  try {
    const max = uuid58.length - 1
    const output = Array.from(uuid58).reduce((acc, chr, pos) => {
      const inc = BASE58.indexOf(chr)
      if (inc < 0) throw new Error()
      return (acc + BigInt(inc)) * (pos < max ? BASE : ONE)
    }, ZERO).toString(16).padStart(32, '0')
    return UUID_INDEXES
      .map((p, i, a) => output.substring(p, a[i + 1]))
      .join('-')
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
