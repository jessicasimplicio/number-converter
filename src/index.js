const { UNITS, TENS, FIRST_TEN } = require('./enum')

const getNumberLength = number => 
  number.toString().length

const getUnits = number => {
  const unit = getDigitOfUnits(number)
  return UNITS[unit]
}

const getDigitOfUnits = number => 
  number % 10

const getDigitOfTens = number =>
  parseInt(number / 10)

const getTens = number => {
  const digitOfTens = getDigitOfTens(number)
  const digitOfUnit = getDigitOfUnits(number)

  
  if (digitOfTens === 1) {
    return FIRST_TEN[number]
  } 

  if (digitOfUnit === 0) {
    return TENS[number]
  } else {
    const unit = getUnits(digitOfUnit)
    const tens = Number(digitOfTens.toString() + '0')
    return (`${TENS[tens]} e ${unit}`)
  }
}

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

console.log(this.convert(4))
