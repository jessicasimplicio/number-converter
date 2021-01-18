const { UNITS } = require('./enum')

module.exports.convert = number => {

  const TEN_LENGTH = {
    1: 'unit',
    2: 'ten',
    3: 'hundred'
  }
  const numberLength = getNumberLength(number)

  if (TEN_LENGTH[numberLength] === 'unit') {
    return UNITS[number.toString()]
  }

  return 'Currently converting only units to words'
}

const getNumberLength = number => 
  number.toString().length

console.log(this.convert(4))
