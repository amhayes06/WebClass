var cards = [];
var cardsLeft = 52;
var suite = ["c", "d", "h", "s"];
var text = "";
var cardsDealt = [];
let request = new XMLHttpRequest();

window.onload = function() {
    nextCard=0;
    for (let i=0; i<4; i++) {
        for (let j=0; j<13; j++) {
            cards[nextCard] = suite[i]+(j+1);
            nextCard+=1;
        }
    }
    for (let k=0; k < cardsLeft; k++) {
        text += "<img src=static/cards/" +cards[k] + ".png" + ">";
    }
    //document.getElementById("test").innerHTML = ;
}

function dealCard() {
    var cc = 0;

    if (cardsLeft ==0) {
        alert("The deck is empty!");
        return false;
    }
    var newCard = randomCard();

    while (cc == 0){
        if (checkCard(newCard)) {
            placeCard(newCard);
            cc = 1;
        }
        else newCard = randomCard();
        
    }
    

}

function removeCard() {
    for ( j=c; j<=cardsLeft-2; j++) {
        cardsDealt
    }

}

function randomCard() {
    num = Math.floor(Math.random() * 52);
    return num;
}

function checkCard(cardNum) {
    cardCheck = 1;
    for (let i=0; i<cardsDealt.length; i++) {
        if (cardsDealt[i] == cardNum) {
            cardCheck = 0;
        }
    }
    if (cardCheck == 0){
        return false;
    }
    else return true;
}

function placeCard(cardNum) {
    var img = document.createElement("img");
    img.src = "static/cards/" +cards[cardNum] + ".png";
    document.getElementById("test").appendChild(img);
    $('img').draggable();
    cardsDealt.push(cardNum);
    cardsLeft--;
}

function handleDropEvent(event, ui) {
    var draggable = ui.draggable;
    var droppable = $(this)
}