  // Deck
  //******************************************************************

var cards = [
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
    {name: 'pic-28', img: 'img/pic-28.png', color: 'grey', size: 'big', fill: 'full', border: 'solid'},
    {name: 'pic-29', img: 'img/pic-29.png', color: 'grey', size: 'big', fill: 'full', border: 'dashed'},
    {name: 'pic-30', img: 'img/pic-30.png', color: 'grey', size: 'big', fill: 'full', border: 'dotted'},
    {name: 'pic-31', img: 'img/pic-31.png', color: 'grey', size: 'medium', fill: 'full', border: 'solid'},
    {name: 'pic-32', img: 'img/pic-32.png', color: 'grey', size: 'medium', fill: 'full', border: 'dashed'},
    {name: 'pic-33', img: 'img/pic-33.png', color: 'grey', size: 'medium', fill: 'full', border: 'dotted'},
    {name: 'pic-34', img: 'img/pic-34.png', color: 'grey', size: 'small', fill: 'full', border: 'solid'},
    {name: 'pic-35', img: 'img/pic-35.png', color: 'grey', size: 'small', fill: 'full', border: 'dashed'},
    {name: 'pic-36', img: 'img/pic-36.png', color: 'grey', size: 'small', fill: 'full', border: 'dotted'},
    {name: 'pic-37', img: 'img/pic-37.png', color: 'grey', size: 'big', fill: 'lined', border: 'solid'},
    {name: 'pic-38', img: 'img/pic-38.png', color: 'grey', size: 'big', fill: 'lined', border: 'dashed'},
    {name: 'pic-39', img: 'img/pic-39.png', color: 'grey', size: 'big', fill: 'lined', border: 'dotted'},
    {name: 'pic-40', img: 'img/pic-40.png', color: 'grey', size: 'medium', fill: 'lined', border: 'solid'},
    {name: 'pic-41', img: 'img/pic-41.png', color: 'grey', size: 'medium', fill: 'lined', border: 'dashed'},
    {name: 'pic-42', img: 'img/pic-42.png', color: 'grey', size: 'medium', fill: 'lined', border: 'dotted'},
    {name: 'pic-43', img: 'img/pic-43.png', color: 'grey', size: 'small', fill: 'lined', border: 'solid'},
    {name: 'pic-44', img: 'img/pic-44.png', color: 'grey', size: 'small', fill: 'lined', border: 'dashed'},
    {name: 'pic-45', img: 'img/pic-45.png', color: 'grey', size: 'small', fill: 'lined', border: 'dotted'},
    {name: 'pic-46', img: 'img/pic-46.png', color: 'grey', size: 'big', fill: 'empty', border: 'solid'},
    {name: 'pic-47', img: 'img/pic-47.png', color: 'grey', size: 'big', fill: 'empty', border: 'dashed'},
    {name: 'pic-48', img: 'img/pic-48.png', color: 'grey', size: 'big', fill: 'empty', border: 'dotted'},
    {name: 'pic-49', img: 'img/pic-49.png', color: 'grey', size: 'medium', fill: 'empty', border: 'solid'},
    {name: 'pic-50', img: 'img/pic-50.png', color: 'grey', size: 'medium', fill: 'empty', border: 'dashed'},
    {name: 'pic-51', img: 'img/pic-51.png', color: 'grey', size: 'medium', fill: 'empty', border: 'dotted'},
    {name: 'pic-52', img: 'img/pic-52.png', color: 'grey', size: 'small', fill: 'empty', border: 'solid'},
    {name: 'pic-53', img: 'img/pic-53.png', color: 'grey', size: 'small', fill: 'empty', border: 'dashed'},
    {name: 'pic-54', img: 'img/pic-54.png', color: 'grey', size: 'small', fill: 'empty', border: 'dotted'},
    ];

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
var shuffledCards = shuffle(cards);

 // var Card = {
 //   attributes: ['name', 'img','color', 'size', 'fill', 'border'],
 //   color: ['blue', 'red', 'grey'],
 //   size: ['big', 'medium', 'small'],
 //   fill: ['full', 'empty', 'lined'],
 //   border: ['solid', 'dashed', 'dotted'],
 // };


//******************************************************************
// HTML/CSS Interactions
//******************************************************************

// Paint random circles in document

for (var i=0; i < 16; i++) {
var images = shuffledCards[i].img;
document.getElementById(""+i).innerHTML = "<img src=\"" + images + "\">";
}
