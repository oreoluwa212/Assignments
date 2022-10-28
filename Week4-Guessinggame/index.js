const readline = require('readline-sync')

function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function main() {
    console.log("Enter [Q]uit to exit game\n");

    let game_round = 1;
    let user_quit = false;

    while (!user_quit) {
        console.log(`Round ${game_round}!\n`);

        let lower = 1;
        let upper = game_round + 1;
        let guessable = randint(lower, upper);

        let guessed = false;

        while  (!guessed && !user_quit) {
            let guess = readline.question(`Enter a number between ${lower} and ${upper}: `);

            if (guess.toLowerCase() !== "q" && isNaN(guess)) {
                console.log(`Invalid input: ${guess}`);
                continue;
            }

            if (guess.toLowerCase() === "q") {
                user_quit = true;
                console.log("Exiting game!\n");
                continue;
            }

            if (+guess < lower || +guess > upper) {
                console.log(`Guess: ${+guess} is out of bounds`);
            }

            if (+guess === guessable) {
                guessed = true
                game_round += 1
                console.log("Correct guess!\n")
            }
        }
    }
}

main();
