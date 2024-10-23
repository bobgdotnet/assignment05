//They get hoisted anyway, right? might as well declare first...
let result;
let validOperation = false;

// ADD A FUNCTION CALLED CALCULATE
function calculate(x,y,op){
	switch (op){
		case '+':
			return x + y;
		case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
		default:
            return null; // In case users doesn't use +,-,*,/
	}
}

//keep asking for valid operators
do {

	// COLLECT FIRST NUMBER FROM USER
    let x = parseFloat(prompt("Enter the first number:"));
    
    // COLLECT SECOND NUMBER FROM USER
    let y = parseFloat(prompt("Enter the second number:"));
    
    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let op = prompt("Operation to perform? (+,-,*,/ only) ");
    
    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    result = calculate(x, y, op);
    
    if (result !== null) {
        // If op is valid, display the result
		// I learned how to use backticks!  so much faster than "" + "" + "" when making a string with variables!
	alert(`The result of ${x} ${op} ${y} is: ${result}`);
        validOperation = true;
    } else {
        // If op is invalid, repeat the loop
        alert("Invalid operation! Please enter '+', '-', '*', or '/'.");
    }

} while (!validOperation); // Keep looping until a valid op is entered