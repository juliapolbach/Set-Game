  // Deck
  //******************************************************************

var Deck = [
    {name: 'pic-01', img: 'img/pic-01.png', color: 'blue', size: 'big', fill: 'full', border: 'solid'},
    {name: 'pic-02', img: 'img/pic-02.png', color: 'blue', size: 'big', fill: 'full', border: 'dashed'},
    {name: 'pic-03', img: 'img/pic-03.png', color: 'blue', size: 'big', fill: 'full', border: 'dotted'},
    {name: 'pic-04', img: 'img/pic-04.png', color: 'blue', size: 'medium', fill: 'full', border: 'solid'},
    {name: 'pic-05', img: 'img/pic-05.png', color: 'blue', size: 'medium', fill: 'full', border: 'dashed'},
    {name: 'pic-06', img: 'img/pic-06.png', color: 'blue', size: 'medium', fill: 'full', border: 'dotted'},
    {name: 'pic-07', img: 'img/pic-07.png', color: 'blue', size: 'small', fill: 'full', border: 'solid'},
    {name: 'pic-08', img: 'img/pic-08.png', color: 'blue', size: 'small', fill: 'full', border: 'dashed'},
    {name: 'pic-09', img: 'img/pic-09.png', color: 'blue', size: 'small', fill: 'full', border: 'dotted'},
    {name: 'pic-10', img: 'img/pic-10.png', color: 'blue', size: 'big', fill: 'lined', border: 'solid'},
    {name: 'pic-11', img: 'img/pic-11.png', color: 'blue', size: 'big', fill: 'lined', border: 'dashed'},
    {name: 'pic-12', img: 'img/pic-12.png', color: 'blue', size: 'big', fill: 'lined', border: 'dotted'},
    {name: 'pic-13', img: 'img/pic-13.png', color: 'blue', size: 'medium', fill: 'lined', border: 'solid'},
    {name: 'pic-14', img: 'img/pic-14.png', color: 'blue', size: 'medium', fill: 'lined', border: 'dashed'},
    {name: 'pic-15', img: 'img/pic-15.png', color: 'blue', size: 'medium', fill: 'lined', border: 'dotted'},
    {name: 'pic-16', img: 'img/pic-16.png', color: 'blue', size: 'small', fill: 'lined', border: 'solid'},
    {name: 'pic-17', img: 'img/pic-17.png', color: 'blue', size: 'small', fill: 'lined', border: 'dashed'},
    {name: 'pic-18', img: 'img/pic-18.png', color: 'blue', size: 'small', fill: 'lined', border: 'dotted'},
    {name: 'pic-19', img: 'img/pic-19.png', color: 'blue', size: 'big', fill: 'empty', border: 'solid'},
    {name: 'pic-20', img: 'img/pic-20.png', color: 'blue', size: 'big', fill: 'empty', border: 'dashed'},
    {name: 'pic-21', img: 'img/pic-21.png', color: 'blue', size: 'big', fill: 'empty', border: 'dotted'},
    {name: 'pic-22', img: 'img/pic-22.png', color: 'blue', size: 'medium', fill: 'empty', border: 'solid'},
    {name: 'pic-23', img: 'img/pic-23.png', color: 'blue', size: 'medium', fill: 'empty', border: 'dashed'},
    {name: 'pic-24', img: 'img/pic-24.png', color: 'blue', size: 'medium', fill: 'empty', border: 'dotted'},
    {name: 'pic-25', img: 'img/pic-25.png', color: 'blue', size: 'small', fill: 'empty', border: 'solid'},
    {name: 'pic-26', img: 'img/pic-26.png', color: 'blue', size: 'small', fill: 'empty', border: 'dashed'},
    {name: 'pic-27', img: 'img/pic-27.png', color: 'blue', size: 'small', fill: 'empty', border: 'dotted'},
    {name: 'pic-28', img: 'img/pic-54.png', color: 'red', size: 'big', fill: 'full', border: 'solid'},
    {name: 'pic-29', img: 'img/pic-53.png', color: 'red', size: 'big', fill: 'full', border: 'dashed'},
    {name: 'pic-30', img: 'img/pic-52.png', color: 'red', size: 'big', fill: 'full', border: 'dotted'},
    {name: 'pic-31', img: 'img/pic-51.png', color: 'red', size: 'medium', fill: 'full', border: 'solid'},
    {name: 'pic-32', img: 'img/pic-50.png', color: 'red', size: 'medium', fill: 'full', border: 'dashed'},
    {name: 'pic-33', img: 'img/pic-49.png', color: 'red', size: 'medium', fill: 'full', border: 'dotted'},
    {name: 'pic-34', img: 'img/pic-48.png', color: 'red', size: 'small', fill: 'full', border: 'solid'},
    {name: 'pic-35', img: 'img/pic-47.png', color: 'red', size: 'small', fill: 'full', border: 'dashed'},
    {name: 'pic-36', img: 'img/pic-46.png', color: 'red', size: 'small', fill: 'full', border: 'dotted'},
    {name: 'pic-37', img: 'img/pic-45.png', color: 'red', size: 'big', fill: 'lined', border: 'solid'},
    {name: 'pic-38', img: 'img/pic-44.png', color: 'red', size: 'big', fill: 'lined', border: 'dashed'},
    {name: 'pic-39', img: 'img/pic-43.png', color: 'red', size: 'big', fill: 'lined', border: 'dotted'},
    {name: 'pic-40', img: 'img/pic-42.png', color: 'red', size: 'medium', fill: 'lined', border: 'solid'},
    {name: 'pic-41', img: 'img/pic-41.png', color: 'red', size: 'medium', fill: 'lined', border: 'dashed'},
    {name: 'pic-42', img: 'img/pic-40.png', color: 'red', size: 'medium', fill: 'lined', border: 'dotted'},
    {name: 'pic-43', img: 'img/pic-39.png', color: 'red', size: 'small', fill: 'lined', border: 'solid'},
    {name: 'pic-44', img: 'img/pic-38.png', color: 'red', size: 'small', fill: 'lined', border: 'dashed'},
    {name: 'pic-45', img: 'img/pic-37.png', color: 'red', size: 'small', fill: 'lined', border: 'dotted'},
    {name: 'pic-46', img: 'img/pic-36.png', color: 'red', size: 'big', fill: 'empty', border: 'solid'},
    {name: 'pic-47', img: 'img/pic-35.png', color: 'red', size: 'big', fill: 'empty', border: 'dashed'},
    {name: 'pic-48', img: 'img/pic-34.png', color: 'red', size: 'big', fill: 'empty', border: 'dotted'},
    {name: 'pic-33', img: 'img/pic-33.png', color: 'red', size: 'medium', fill: 'empty', border: 'solid'},
    {name: 'pic-50', img: 'img/pic-32.png', color: 'red', size: 'medium', fill: 'empty', border: 'dashed'},
    {name: 'pic-51', img: 'img/pic-31.png', color: 'red', size: 'medium', fill: 'empty', border: 'dotted'},
    {name: 'pic-52', img: 'img/pic-30.png', color: 'red', size: 'small', fill: 'empty', border: 'solid'},
    {name: 'pic-53', img: 'img/pic-29.png', color: 'red', size: 'small', fill: 'empty', border: 'dashed'},
    {name: 'pic-54', img: 'img/pic-28.png', color: 'red', size: 'small', fill: 'empty', border: 'dotted'},
    {name: 'pic-55', img: 'img/pic-55.png', color: 'grey', size: 'big', fill: 'full', border: 'solid'},
    {name: 'pic-56', img: 'img/pic-56.png', color: 'grey', size: 'big', fill: 'full', border: 'dashed'},
    {name: 'pic-57', img: 'img/pic-57.png', color: 'grey', size: 'big', fill: 'full', border: 'dotted'},
    {name: 'pic-58', img: 'img/pic-58.png', color: 'grey', size: 'medium', fill: 'full', border: 'solid'},
    {name: 'pic-59', img: 'img/pic-59.png', color: 'grey', size: 'medium', fill: 'full', border: 'dashed'},
    {name: 'pic-60', img: 'img/pic-60.png', color: 'grey', size: 'medium', fill: 'full', border: 'dotted'},
    {name: 'pic-61', img: 'img/pic-61.png', color: 'grey', size: 'small', fill: 'full', border: 'solid'},
    {name: 'pic-62', img: 'img/pic-62.png', color: 'grey', size: 'small', fill: 'full', border: 'dashed'},
    {name: 'pic-63', img: 'img/pic-63.png', color: 'grey', size: 'small', fill: 'full', border: 'dotted'},
    {name: 'pic-64', img: 'img/pic-64.png', color: 'grey', size: 'big', fill: 'lined', border: 'solid'},
    {name: 'pic-65', img: 'img/pic-65.png', color: 'grey', size: 'big', fill: 'lined', border: 'dashed'},
    {name: 'pic-66', img: 'img/pic-66.png', color: 'grey', size: 'big', fill: 'lined', border: 'dotted'},
    {name: 'pic-67', img: 'img/pic-67.png', color: 'grey', size: 'medium', fill: 'lined', border: 'solid'},
    {name: 'pic-68', img: 'img/pic-68.png', color: 'grey', size: 'medium', fill: 'lined', border: 'dashed'},
    {name: 'pic-69', img: 'img/pic-69.png', color: 'grey', size: 'medium', fill: 'lined', border: 'dotted'},
    {name: 'pic-70', img: 'img/pic-70.png', color: 'grey', size: 'small', fill: 'lined', border: 'solid'},
    {name: 'pic-71', img: 'img/pic-71.png', color: 'grey', size: 'small', fill: 'lined', border: 'dashed'},
    {name: 'pic-72', img: 'img/pic-72.png', color: 'grey', size: 'small', fill: 'lined', border: 'dotted'},
    {name: 'pic-73', img: 'img/pic-73.png', color: 'grey', size: 'big', fill: 'empty', border: 'solid'},
    {name: 'pic-74', img: 'img/pic-74.png', color: 'grey', size: 'big', fill: 'empty', border: 'dashed'},
    {name: 'pic-75', img: 'img/pic-75.png', color: 'grey', size: 'big', fill: 'empty', border: 'dotted'},
    {name: 'pic-76', img: 'img/pic-76.png', color: 'grey', size: 'medium', fill: 'empty', border: 'solid'},
    {name: 'pic-77', img: 'img/pic-77.png', color: 'grey', size: 'medium', fill: 'empty', border: 'dashed'},
    {name: 'pic-78', img: 'img/pic-78.png', color: 'grey', size: 'medium', fill: 'empty', border: 'dotted'},
    {name: 'pic-79', img: 'img/pic-79.png', color: 'grey', size: 'small', fill: 'empty', border: 'solid'},
    {name: 'pic-80', img: 'img/pic-80.png', color: 'grey', size: 'small', fill: 'empty', border: 'dashed'},
    {name: 'pic-81', img: 'img/pic-81.png', color: 'grey', size: 'small', fill: 'empty', border: 'dotted'},
    ];

//******************************************************************
// Game Logic
//******************************************************************


var selectedCards = [];

var selectedColors = [];
var selectedSizes = [];
var selectedFills = [];
var selectedBorders = [];

var setResult = [];
var winCase1 = "false,false,false,true";
var winCase2 = "false,false,true,true";
var winCase3 = "false,true,true,true";

function clearSelected() {
  selectedCards = [];
  selectedColors = [];
  selectedFills = [];
  selectedSizes = [];
  selectedBorders = [];
  setResult = [];
}

// Fisher-Yates Shuffle
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// recoge la info de cada click y lo sube a una array
function checkCard(){
  var counter = 0;
  this.className += " selected";
  var src = this.querySelector('img').getAttribute('src');
  var myCard = Deck.filter(function(card){
  	if(card.img === src && counter < 4) {
      selectedCards.push(src);
      selectedColors.push(card.color);
      selectedSizes.push(card.size);
      selectedFills.push(card.fill);
      selectedBorders.push(card.border);
      counter++;
    }

  });
}

//check if all the values are the same or not
function checkMatches(array) {
  console.log(">>>>>>>>", array);
    for(var i = 0; i < array.length; i++)
  {
      if((array[0] !== array[1]) && (array[0]!==array[2]) && (array[1]!==array[2])) {
                setResult.push(false);
                return false;}

      else if (array[0] === array[1] && array[2]) {
                setResult.push(true);
                return true;}

      else {}
    }
}

function sortSetResult (array) {
  sortedArray = array.sort().toString();
  return sortedArray;
}

function checkIfWin(string) {
  // return true;
  console.log(string);
  return string === winCase1 || string === winCase2 || string === winCase3;
}

function checkIfSet (won) {
  if (won) win(); else loose();
}
function removeSelectedClass(cardsArray){
  cardsArray.forEach(function(card){
    card.classList.remove('selected');
  });
}

function replaceWinCards (newCards) {
  var selectedCards = document.querySelectorAll(".card.selected");
  removeSelectedClass(selectedCards);
  var newPic01 = newCards[0].img;
  var newPic02 = newCards[1].img;
  var newPic03 = newCards[2].img;
  selectedCards[0].innerHTML= "<img src=\"" + newPic01 + "\">";
  selectedCards[1].innerHTML="<img src=\"" + newPic02 + "\">";
  selectedCards[2].innerHTML="<img src=\"" + newPic03 + "\">";
}

// function youLoose () {
//   removeSelectedClass(selectedCards);
// }

var remainingDeck = Deck;

function picInfoSelectedItems () {
  var buttons = Array.from(document.getElementsByClassName('card'));
  buttons.forEach(function (button){
    button.addEventListener('click', function(event) {
      audio.play();
      checkCard.apply(this, [event]);
      if (selectedCards.length === 3) {
        remainingDeck = firstIterate(remainingDeck);
      }
    });
  });
}

function resetDiv (array) {
  array.splice(0,3);
}

//******************************************************************
// Game
//******************************************************************

// Paint random circles in document

var score = 0;

function firstIterate(remainingDeck) {
  var cards;
  var selectCardsCount = 0;
        checkMatches(selectedColors);
        checkMatches(selectedFills);
        checkMatches(selectedSizes);
        checkMatches(selectedBorders);
        var readyToCheckResult = sortSetResult(setResult);
        var won = checkIfWin(readyToCheckResult);
        checkIfSet(won);
        if (won) {
        [newCards, remainingDeck] = pickNCards(3, remainingDeck);
        replaceWinCards(newCards);
        setAudio.play();
        score +=100;
        showScore();
      } else {
        console.log("fooooo");
        console.log(selectedCards);
        selectedCards = [];
        score-=5;
        showScore();
      }
      clearSelected();
      console.log(score);
      return remainingDeck;

}

function pickNCards(n, deck) {
  var cards = [];
  for (var i = 0, j = 0; i < deck.length && j < n; i++, j++) {
    cards.push(deck[i]);
  }
  return [cards, deck.slice(i)];
}

function deleteByValue(val, array) {
    for(var f in array) {
        if(array[f] == val) {
            delete array[f];
        }
    }
}


//******************************************************************
// DOM Interactions
//******************************************************************

function paintGame(cards) {
  for (var i=0; i < cards.length; i++) {
    var images = cards[i].img;
    document.getElementById(""+i).innerHTML = "<img src=\"" + images + "\">";
  }
}

function randomFailText() {
    var worlds = ["Uh, that was close, <br> don't give up!", "That wasn't smart enough. <br> Try again!", "What da hell? Really?", "I know you, <br> and you can do it <br> better than that."];
    var whichWorld = Math.floor(Math.random() * worlds.length);
    return worlds[whichWorld];
}

function win  () {
  document.getElementById("win-loose").innerHTML = "Nice SET!";
}

function loose  () {
  document.getElementById("win-loose").innerHTML = randomFailText();
}

function showScore () {
  document.getElementById("score").innerHTML = score;
}

function initGame (){
  var cards;
  remainingDeck = shuffle(Deck);
  [cards, remainingDeck] = pickNCards(30, remainingDeck);
  var selectCardsCount = 0;

  paintGame(cards);
  picInfoSelectedItems ();
}

initGame();

var audio = new Audio('sounds/click.mp3');
var setAudio = new Audio('sounds/win.mp3');
