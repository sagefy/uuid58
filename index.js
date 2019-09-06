const DASH_REGEXP = /-/g
const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const BASE = BigInt(BASE58.length)
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
    const len = uuid58.length
    let output = BigInt(0)
    for (let [pos, chr] of Array.from(uuid58).entries()) {
      const index = BASE58.indexOf(chr)
      if (index < 0) throw new Error()
      output += BigInt(index)
      if (pos < len - 1) output *= BASE
    }
    output = output.toString(16).padStart(32, '0')
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
