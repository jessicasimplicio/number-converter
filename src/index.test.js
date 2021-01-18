const { convert } = require('./index')

describe('Test the conversion', () => {
  test('It should return the units in words', () => {
    const unitNumber = 2    
    const result = convert(unitNumber)

    expect(result).toEqual('dois')
  })

  test('It should return the ten in words', () => {
    const tenNumber = 20   
    const result = convert(tenNumber)

    expect(result).toEqual('Currently converting only units to words')
  })

})