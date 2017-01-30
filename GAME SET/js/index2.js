  // Deck
  //******************************************************************

var deck = [
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

// shuffled array, random and only pairs
var shuffledCards = shuffle(deck);

//******************************************************************
// Game Logic
//******************************************************************

firstPick = ""; // first selection
secondPick = ""; // second selection
thirdPick = ""; // third selection
set = 0;

//******************************************************************
// HTML/CSS Interactions
//******************************************************************

for (var i=0; i < 16; i++) {
var images = shuffledCards[i].img;
document.getElementById(""+i).innerHTML = "<img src=\"" + images + "\">";
}

$(document).ready(function(){
 for (var i=0; i<shuffleCards.length;i++){
    $("#memory_board div:nth-child("+(i+1)+")").attr("name", shuffleCards[i].name);
    }
    var clickCounter = 0;
    var lastSuperHero = "";

    $('.pic').on('click', function(){
      clickCounter++;
      console.log($('#click').text("Clicks: "+clickCounter));
      var superHero = $(this).attr('name');
      $(this).addClass("clicked");
      $(this).css("background-image", "url('img/"+superHero+".jpg')");

      if (clickCounter % 2 === 0) {
            checkIfPair(lastSuperHero, superHero);
     } else {
       lastSuperHero = superHero;
     }
   });
