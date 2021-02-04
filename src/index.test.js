const { convert } = require('./index')

describe('Test the conversion', () => {
  test('It should return the units in words', () => {
    const unitNumber = 2    
    const result = convert(unitNumber)

    expect(result).toEqual('dois')
  })

  test('It should return tens in words', () => {
    expect(convert(10)).toEqual('dez')
    expect(convert(13)).toEqual('treze')
    expect(convert(80)).toEqual('oitenta')
    expect(convert(25)).toEqual('vinte e cinco')
    expect(convert(78)).toEqual('setenta e oito')
  })

  test('It should return hundreds in words', () => {
    expect(convert(100)).toEqual('cem')
    expect(convert(103)).toEqual('cento e três')
    expect(convert(117)).toEqual('cento e dezessete')
    expect(convert(168)).toEqual('cento e sessenta e oito')
    expect(convert(209)).toEqual('duzentos e nove')
    expect(convert(359)).toEqual('trezentos e cinquenta e nove')
    expect(convert(893)).toEqual('oitocentos e noventa e três')
    expect(convert(1000)).toEqual('Conversion works only for numbers from 0 to 999')
  })
})
