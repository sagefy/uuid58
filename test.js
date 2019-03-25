var uuid58 = require('./index')

describe('uuid58', function() {
  var xuuid = '7a2957d2-b79c-48c6-9771-270aed712fd8'
  var xuuid58 = 'G5w1tJ2db6LJg8PxiEvkdm'

  it('should convert a uuid to uuid58', function() {
    expect(uuid58.convertUuidToUuid58(xuuid)).toBe(xuuid58)
  })

  it('should convert a uuid58 to uuid', function() {
    expect(uuid58.convertUuid58ToUuid(xuuid58)).toBe(xuuid)
  })
})
