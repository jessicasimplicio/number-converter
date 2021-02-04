const { UNITS, TENS, FIRST_TEN, ONE_HUNDRED, HUNDREDS } = require('./enum')

const getNumberLength = number => 
  number.toString().length

const getUnits = number => {
  const unit = getDigitOfUnits(number)
  return UNITS[unit]
}

const getDigitOfUnits = number => 
  number % 10

const getDigitOfTens = number =>
  parseInt(number / 10) % 10

const getTens = value => {
  const number = parseInt(value % 100)
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

const getDigitOfHundreds = number => 
  parseInt(number / 100) % 10

const getHundreds = number => {
  const digitOfTens = getDigitOfTens(number)
  const digitOfHundred = getDigitOfHundreds(number)
  if (number === 100) {
    return ONE_HUNDRED[number]
  }

  if (digitOfHundred === 1) {
    if(digitOfTens === 0){
      return(`${ONE_HUNDRED.MORE} e ${getUnits(number)}`)
    } else {
      return(`${ONE_HUNDRED.MORE} e ${getTens(number)}`)
    }
  } 

  if (digitOfHundred !== 1) {
    const hundred = Number(digitOfHundred.toString() + '00')
    if(digitOfTens === 0){
      return(`${HUNDREDS[hundred]} e ${getUnits(number)}`)
    } else {
      return(`${HUNDREDS[hundred]} e ${getTens(number)}`)
    }
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

  if (NUMBER_GROUP[numberLength] === 'hundred') {
    return getHundreds(number)
  }

  return 'Conversion works only for numbers from 0 to 999'
}

console.log(this.convert(4))
