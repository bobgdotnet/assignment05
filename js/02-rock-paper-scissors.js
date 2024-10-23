/* Our code will break the game into 3 phases:

    User makes a choice. How will we collect the user’s choice?
    Computer makes a choice. How will we collect the computer’s choice?
	

    A conditional that determines who wins.

You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

    Begin by prompting the user for their choice.
    Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
    Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
    Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
    What if the result ends in a tie? Figure out how to handle that as well.
    What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
 */
 
 // user prompt
 
 playerChoice = prompt("Rock, Paper, Scissors, Lizard or Spock?").toLowerCase()
 
 // check for valid entry
function playGame(playerChoice) {
    const validChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    if (!validChoices.includes(playerChoice)) {
        return alert("Invalid choice! Please choose either 'rock', 'paper', 'scissors', 'lizard', or 'spock'.");
    }

    const computerChoice = computersChoice();
    console.log(determineWinner(playerChoice, computerChoice));
}


 // computers choice
function computersChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randIndex = Math.floor(Math.random() * choices.length); //this allows for more/fewer choices, but I still have to program the 'win' states if I add any
    return choices[randIndex];
}

// evaluate game
function determineWinner(playerChoice, computerChoice) {
    //check for ties first
	if (playerChoice === computerChoice) {
        return alert("It's a tie!");
    }
		// all win conditions for player, if any of the 5 are true, they win
    if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
    ) {
        return alert("You win! " + playerChoice + " beats " + computerChoice);
    } else {
		//no win conditions met means player loses
        return alert("You lose! " + computerChoice + " beats " + playerChoice);
    }
}
//play game
playGame(playerChoice)
