const { UNITS, TENS, FIRST_TEN } = require('./enum')

module.exports.convert = number => {

  const NUMBER_GROUP = {
    1: 'unit',
    2: 'ten',
    3: 'hundred'
  }
  const numberLength = getNumberLength(number)

  if (NUMBER_GROUP[numberLength] === 'unit') {
    return getUnits(number)
  }

  if (NUMBER_GROUP[numberLength] === 'ten') {
    return getTens(number)
  }

  return 'Currently converting only units and tens to words'
}

const getNumberLength = number => 
  number.toString().length

console.log(this.convert(4))

const getDigitOfTens = number =>
  parseInt(number / 10)

const getDigitOfUnits = number => 
  number % 10

const getUnits = number =>
  UNITS[number.toString()]

const getTens = number => {
  const digitOfTens = getDigitOfTens(number)
  const digitOfUnit = getDigitOfUnits(number)

  
  if (digitOfTens === 1) {
    return FIRST_TEN[number.toString()]
  } 

  if (digitOfUnit === 0) {
    return TENS[number.toString()]
  } else {
    const unit = digitOfUnit.toString()
    const tens = digitOfTens.toString() + '0'

    return (`${TENS[tens]} e ${UNITS[unit]}`)
  }
}
  