const { convert } = require('./index')

describe('Test the conversion', () => {
  test('It should return the units in words', () => {
    const unitNumber = 2    
    const result = convert(unitNumber)

    expect(result).toEqual('dois')
  })

  test('It should return the ten in words', () => {
    expect(convert(10)).toEqual('dez')
    expect(convert(13)).toEqual('treze')
    expect(convert(80)).toEqual('oitenta')
    expect(convert(25)).toEqual('vinte e cinco')
    expect(convert(78)).toEqual('setenta e oito')
  })
})
