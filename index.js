var bs58 = require('bs58')

var REMOVE_DASH_REGEXP = /-/g

function convertUuidToUuid58(uuid) {
  try {
    return bs58.encode(
      Buffer.from(
        uuid.replace(REMOVE_DASH_REGEXP, ''),
        'hex'
      )
    ) 
  } catch (e) {
    return uuid 
  }
}

function convertUuid58ToUuid(uuid58) {
  try {
    var hex = bs58.decode(uuid58).toString('hex')
    return [
      hex.substr(0, 8),
      hex.substr(8, 4),
      hex.substr(12, 4),
      hex.substr(16, 4),
      hex.substr(20)
    ].join('-')
  } catch (e) {
    return uuid58 
  }
}

module.exports = {
  convertUuidToUuid58: convertUuidToUuid58,
  convertUuid58ToUuid: convertUuid58ToUuid,
}
