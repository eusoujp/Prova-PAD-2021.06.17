prova pad 2021.06.17

// Questão 1

function someFun(params, callback) {
  callback(params.someProperty)

  return 1
}

// Questão 2

function someFn(number) {
  const returnFunction = (value) => {
    switch (value) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return returnFunction
}

// Questão 3

function calculator(num1, num2) {
  return callback => callback(num1, num2)
}

//  Questão 4

/**
 * O resultado que irá aparecer é este:
 * 4
 * 1
 * 5
 * 1
 */

// Questão 5

function Tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`)
  }
}
