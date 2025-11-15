//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * TODO - Please, add specific description here for the application purpose.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  if (!permittedInputSystems().includes(inputNumberSystem) || 
    !permittedOutputSystems().includes(outputNumberSystem)) {
    throw "InvalidNumberSystem"
  }

  if (inputNumberSystem == outputNumberSystem){
    return inputNumber;
  }

  let dtoOut;
  if (inputNumberSystem == 2){
    if (outputNumberSystem == 10) {
      dtoOut = fromBinaryToDecimal(inputNumber);
    }
  } else if (inputNumberSystem == 10){
    if (outputNumberSystem == 2) {
      dtoOut = fromDecimalToBinary(inputNumber);
    }
  }

  return dtoOut;
}

function fromDecimalToBinary(decimalNumber){
  decimalNumber = Number(decimalNumber);
  let inBinarSystemNumberValue = "";
  for (let i = decimalNumber; i > 0; i = Math.floor(i/2)) {
    inBinarSystemNumberValue = (i % 2 ? "1" : "0") + inBinarSystemNumberValue;
  }

  return inBinarSystemNumberValue || "0";
}

function fromBinaryToDecimal(binaryNumber) {
  binaryNumber = binaryNumber.replace(/^0+/, '');
  let inDecimalSystemValue = 0n;

  for (let i = 0; i < binaryNumber.length; i++) {
    let bit = binaryNumber[binaryNumber.length - 1 - i];
    if (bit === '1') {
      //inDecimalSystemValue += Math.pow(2, i);
      inDecimalSystemValue += 1n << BigInt(i);
    }
  }

  return inDecimalSystemValue.toString();
}

export function permittedInputSystems() {
	return [10, 2];
}

export function permittedOutputSystems() {
	return [10, 2];
}

