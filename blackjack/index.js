

let hasBlackJack = false;
let isAlive = false;
let message = "";

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function getRandom(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10){
        return 10;
    }else if(randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
}

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame() {
    isAlive = true;
    let firstCard = getRandom();
    let secondCard = getRandom();
    cards = [firstCard, secondCard];//array cards
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
// 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;
}
function newCard() {
    let card = getRandom();
    sum += card;
    cards.push(card);
    renderGame();

}