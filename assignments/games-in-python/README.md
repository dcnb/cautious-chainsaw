# 📘 Assignment: Games in Python

## 🎯 Objective

Build a classic Hangman word-guessing game using Python to practice string manipulation, loops, conditionals, and user input handling.

## 📝 Tasks

### 🛠️ Create the Hangman Game

#### Description
Create a Hangman game where players guess letters to reveal a hidden word before running out of attempts. The game should randomly select a word from a predefined list and provide feedback on each guess.

#### Requirements
Completed program should:

- Randomly select a word from a predefined list of at least 5 words
- Display the current progress using underscores for unguessed letters (e.g., `_ _ _ _`)
- Accept single letter guesses from the player
- Track and display the number of incorrect guesses remaining
- Show all previously guessed letters
- Validate input (reject non-letter characters and already-guessed letters)
- End the game when the word is fully guessed (win) or attempts are exhausted (loss)
- Display appropriate win/lose messages with the correct word revealed
- Ask the player if they want to play again

#### Example Output
```
Welcome to Hangman!
_ _ _ _ _ _
Guesses remaining: 6

Enter a letter: e
Good guess!
_ e _ _ _ _
Guesses remaining: 6

Enter a letter: z
Wrong! Try again.
_ e _ _ _ _
Guesses remaining: 5
```
