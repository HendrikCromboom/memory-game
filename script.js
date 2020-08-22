const cards = document.querySelectorAll(".card");

let isFlipped, isLocked = false;
let cardOne,cardTwo;

function flipCard(){
    if (isLocked || this === cardOne) return;

    this.classList.add("flip");

    if (!isFlipped){
        isFlipped = true;
        cardOne = this;
        return;
    }
    cardTwo = this;

    checkForMatch();
}
function checkForMatch(){
    if (cardOne.dataset.back === cardTwo.dataset.back)
    {
        lockCards();
        return;
    }
    unFlipCards();
}
function lockCards(){
    cardOne.removeEventListener("click", flipCard)
    cardTwo.removeEventListener("click", flipCard)

    resetTurn();
}
function unFlipCards(){
    isLocked = true

    setTimeout(() => {
        cardOne.classList.remove("flip");
        cardTwo.classList.remove("flip");

        resetTurn();
    }, 1000)
}
(function shuffle(){
    cards.forEach(card => {
        let rand = Math.floor(Math.random() *4);
        card.style.order = rand.toString();
    });
});

function resetTurn(){
    isFlipped = false;
    isLocked = false;
    cardOne = null;
    cardTwo = null;
}


cards.forEach(card => card.addEventListener("click", flipCard));