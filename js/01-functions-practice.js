//STEP 1
const halfNumber = (num) => alert("Half of " + num + " is " + num/2)
halfNumber(parseInt(prompt("Divide what number by 2?")))

//STEP 2
const sqrNumber = (num) => alert("The result of squaring " + num + " is " + num**2)
sqrNumber(parseInt(prompt("Square what number?")))

//STEP 3

const percentOf = (num1,num2) => alert(num1 + " is " + (num1/num2)*100 + "% of " + num2)
percentOf(parseInt(prompt("Dividend? (number you have of a bigger total)")),parseInt(prompt("Divisor? (the total you need % from)")))

//STEP 4
const findModulus = (num1,num2) => alert(num1 % num2 + " is the modulus of " + num1 + " and " + num2)
findModulus(parseInt(prompt("modulus dividend?")),parseInt(prompt("modulus divisor?")))

//STEP 5