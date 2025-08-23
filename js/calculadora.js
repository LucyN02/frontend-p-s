let operator = prompt("Você gostaria de fazer qual operação? + , - , *  , /")

let number1 = parseFloat(prompt("Qual é o primeiro número?"))
let number2 = parseFloat(prompt("Qual é o segundo número?"))

if (operator == "/" && number2 == 0) {
    alert("não é possivel dividir um numero com 0")
    throw new Error("Divisão inválida")
}

switch (operator) { 
    case '+': 
      result = number1 + number2
      alert("Resultado: " + result)
      break
  
    case '-': 
        result = number1 - number2
        alert("Resultado: " + result)
        break

    case '*': 
        result = number1 - number2
        alert("Resultado: " + result)    
        break

    case '/': 
      result = number1 - number2
      alert("Resultado: " + result)
      break
  
    default: 
      alert('Invalid operator')
  }