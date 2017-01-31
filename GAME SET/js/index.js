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
    {name: 'pic-28', img: 'img/pic-28.png', color: 'red', size: 'big', fill: 'full', border: 'solid'},
    {name: 'pic-29', img: 'img/pic-29.png', color: 'red', size: 'big', fill: 'full', border: 'dashed'},
    {name: 'pic-30', img: 'img/pic-30.png', color: 'red', size: 'big', fill: 'full', border: 'dotted'},
    {name: 'pic-31', img: 'img/pic-31.png', color: 'red', size: 'medium', fill: 'full', border: 'solid'},
    {name: 'pic-32', img: 'img/pic-32.png', color: 'red', size: 'medium', fill: 'full', border: 'dashed'},
    {name: 'pic-33', img: 'img/pic-33.png', color: 'red', size: 'medium', fill: 'full', border: 'dotted'},
    {name: 'pic-34', img: 'img/pic-34.png', color: 'red', size: 'small', fill: 'full', border: 'solid'},
    {name: 'pic-35', img: 'img/pic-35.png', color: 'red', size: 'small', fill: 'full', border: 'dashed'},
    {name: 'pic-36', img: 'img/pic-36.png', color: 'red', size: 'small', fill: 'full', border: 'dotted'},
    {name: 'pic-37', img: 'img/pic-37.png', color: 'red', size: 'big', fill: 'lined', border: 'solid'},
    {name: 'pic-38', img: 'img/pic-38.png', color: 'red', size: 'big', fill: 'lined', border: 'dashed'},
    {name: 'pic-39', img: 'img/pic-39.png', color: 'red', size: 'big', fill: 'lined', border: 'dotted'},
    {name: 'pic-40', img: 'img/pic-40.png', color: 'red', size: 'medium', fill: 'lined', border: 'solid'},
    {name: 'pic-41', img: 'img/pic-41.png', color: 'red', size: 'medium', fill: 'lined', border: 'dashed'},
    {name: 'pic-42', img: 'img/pic-42.png', color: 'red', size: 'medium', fill: 'lined', border: 'dotted'},
    {name: 'pic-43', img: 'img/pic-43.png', color: 'red', size: 'small', fill: 'lined', border: 'solid'},
    {name: 'pic-44', img: 'img/pic-44.png', color: 'red', size: 'small', fill: 'lined', border: 'dashed'},
    {name: 'pic-45', img: 'img/pic-45.png', color: 'red', size: 'small', fill: 'lined', border: 'dotted'},
    {name: 'pic-46', img: 'img/pic-46.png', color: 'red', size: 'big', fill: 'empty', border: 'solid'},
    {name: 'pic-47', img: 'img/pic-47.png', color: 'red', size: 'big', fill: 'empty', border: 'dashed'},
    {name: 'pic-48', img: 'img/pic-48.png', color: 'red', size: 'big', fill: 'empty', border: 'dotted'},
    {name: 'pic-49', img: 'img/pic-49.png', color: 'red', size: 'medium', fill: 'empty', border: 'solid'},
    {name: 'pic-50', img: 'img/pic-50.png', color: 'red', size: 'medium', fill: 'empty', border: 'dashed'},
    {name: 'pic-51', img: 'img/pic-51.png', color: 'red', size: 'medium', fill: 'empty', border: 'dotted'},
    {name: 'pic-52', img: 'img/pic-52.png', color: 'red', size: 'small', fill: 'empty', border: 'solid'},
    {name: 'pic-53', img: 'img/pic-53.png', color: 'red', size: 'small', fill: 'empty', border: 'dashed'},
    {name: 'pic-54', img: 'img/pic-54.png', color: 'red', size: 'small', fill: 'empty', border: 'dotted'},
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

var clickCounter = 0;
var selectedCards = [];

var selectedColors = [];
var selectedSizes = [];
var selectedFills = [];
var selectedBorders = [];

var setResult = [];
var winCase1 = "false,false,false,true";
var winCase2 = "false,false,true,true";
var winCase3 = "false,true,true,true";



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
  clickCounter++;
  var src = this.querySelector('img').getAttribute('src');
  var myCard = Deck.filter(function(card){
  	if(card.img === src && clickCounter < 4) {
      selectedCards.push(src);
      selectedColors.push(card.color);
      selectedSizes.push(card.size);
      selectedFills.push(card.fill);
      selectedBorders.push(card.border);
    }
  });
}

// check if all the values are the same or not
function checkMatches(array) {
    for(var i = 0; i < array.length; i++)
  {
      if(array[0] !== array[i]) {
          setResult.push(false);
          return false;
        }
  }
  setResult.push(true);
  return true;
}

function sortSetResult (array) {
  sortedArray = array.sort().toString();
  return sortedArray;
}

function checkIfSet (string) {
  console.log(string);
  if (string === winCase1) {
    console.log("win!");
  } else if (string === winCase2) {
    console.log("win!");
  } else if (string === winCase3) {
    console.log("win!");
  } else {
    console.log ("epic fail");
  }
}

//******************************************************************
// HTML/CSS Interactions
//******************************************************************

// Paint random circles in document
function startGame() {
  // shuffled array
  var shuffledCards = shuffle(Deck);
  var selectCardsCount = 0;
  // convierte los div en buttons
  var buttons = Array.from(document.getElementsByClassName('card'));
  buttons.forEach(function(button){
    button.addEventListener('click', function(event) {
      checkCard.apply(this, [event]);
      selectCardsCount += 1;

      if (selectCardsCount === 3) {
        console.log("has seleccionado 3!");
        console.log(selectedColors);
        console.log(selectedFills);
        console.log(selectedSizes);
        console.log(selectedBorders);

        var lookAtColors = checkMatches(selectedColors);
        var lookAtFills = checkMatches(selectedFills);
        var lookAtSizes = checkMatches(selectedSizes);
        var lookAtBorders = checkMatches(selectedBorders);
        console.log(lookAtColors);
        console.log(lookAtFills);
        console.log(lookAtSizes);
        console.log(lookAtBorders);
        console.log(setResult);
        var readyToCheckResult = sortSetResult (setResult);
        console.log(readyToCheckResult);
        var set = checkIfSet (readyToCheckResult);
      }
    });
  });
  paintGame(shuffledCards);
}

function paintGame(cards) {
  for (var i=0; i < 16; i++) {
    var images = cards[i].img;
    document.getElementById(""+i).innerHTML = "<img src=\"" + images + "\">";
  }
}

function play(){
      var audio = document.getElementById("audio");
      audio.play();
                }

startGame();
