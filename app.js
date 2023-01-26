// wait for page to load before running code
document.addEventListener("DOMContentLoaded", () => {
  
  const userInput = document.getElementById("user-input");
  const submitButton = document.getElementById("submit")
  const guessBankIncorrect = document.querySelector(".guess-bank[data-type=incorrect]");
  let guessedList = new Array;

  // TODO  
  // create word bank
const wordBank = [
  "apple",
  "orange",
  "banana",
  "melon"
]

  // show a word to guess
  const word = document.getElementById("word")
  let randomIndex = Math.floor(Math.random() * wordBank.length);
  // pick random word
  let randomWord = wordBank[randomIndex].toUpperCase();
  // show characters as blank card
  let blankCards = "";
  for (let i = 0; i < randomWord.length; i++) {
    blankCards += `<p class="card"></p>`;
  }
  word.innerHTML = blankCards;

  
  // show man hanging progression


  // prevent page from refreshing
  submitButton.addEventListener("click", (event) => {
    // prevent page from refreshing
    event.preventDefault();
    event.stopPropagation();

    handleGuess();
    handleWinLose();
    

  // remove letter after guessing && focus on userInput
  userInput.value ="";
  userInput.focus();

  
    console.log(guessedList);
    console.log(guessedList.length);
  
  })  
 
  function handleGuess () {
    // get user's guess
    let guessedLetter = userInput.value.toUpperCase();
  
    // validate not empty
    // only add unique letters -- no duplicates
    // TODO only allow letters -- no special characters or numbers
    if (guessedLetter && !guessedList.includes(guessedLetter)) {
  
      // handle guesses
      if (randomWord.includes(guessedLetter)) {
        // show correct letters
  
        //TODO fix resetting previously correct guesses
        // for (let i = 0; i < randomWord.length; i++) {
        //   if (word[i].innerText === guessedLetter) {
        //     tempCards += `<p class="card">${guessedLetter}</p>`
        //   } else {
        //     tempCards += `<p class="card"></p>`
        //   }
        // }
        // word.innerHTML = tempCards;
  
        Array.from(word.children).forEach((letter, i) => {
          // check if blank
          if(!letter.innerText) {
            // update correct letters
            if (randomWord[i] === guessedLetter) {
              word[i] = `<p class="card">${guessedLetter}</p>`;
              letter.innerText= guessedLetter
            }
          }
        })
  
        
  
      } else {
        // append to incorrect list
      guessedList.push(guessedLetter);
      // Loop through list to display guessed letters
      guessBankIncorrect.innerHTML += `<p class="card">${guessedList[guessedList.length - 1]}</p>`;
      }
  
      
  
    }
  }

  function handleWinLose () {
    let hasBlank = false;
   Array.from(word.children).forEach(letter => {
    if(!letter.innerText) {
      hasBlank = true;
      console.log(hasBlank)
    }
   })
  }

});



