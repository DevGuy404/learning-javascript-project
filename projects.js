// 1. Despot some money
// 2. Determine number of lines to bet on
// 3. Collect a bat amount
// 4. spin the machine
// 5. check if the user won
// 6. give the user their winings
// 7. play again

const prompt = require("prompt-sync")();











const deposit = () => {

    while (true) {
      const depostiAmount = prompt("Enter a deposti amount: ");
      const numberDepositAmount = parseFloat(depostiAmount);

      if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.")
      } else {
            return numberDepositAmount;
      }
    }

};

const getNumberOfLines = () => {
      while (true) {
            const lines = prompt("Enter the number of lines to bet on (1-3): ");
            const numberOfLines = parseFloat(lines);

            if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
                  console.log("Invalid number of lines, try again.");
            } else {
                  return numberOfLines;
            }
      }
};

const getBet = (balance, lines) => {
      while (true) {
            const bet = prompt("Enter the bet per line: ");
            const numberBet = parseFloat(bet);

            if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
                  console.log("Invalid  bet, try again.");
            } else {
                  return numberBet;
            }
      }
};


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
