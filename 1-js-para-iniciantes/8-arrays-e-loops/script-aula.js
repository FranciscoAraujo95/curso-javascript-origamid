//ARRAYS

var videoGames = ["Switch", "PS4", "XBOX"];
videoGames.push("3DS");

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

// console.log(videoGames[1]);
// Output: PS4
// videoGames.pop();
// remove last element from array using pop() method
// console.log(videoGames);

// add new item to the end of an existing array with push() method
// console.log(videoGames);

videoGames.length;
// get length property for number of elements in a given array
// console.log(`O array tem ${videoGames.length} valores.`);

//LOOPS (LAÇOS DE REPETIÇÃO)

for (var numero = 1; numero <= 6; numero++) {
  // console.log(numero);
}

var i = 0;
while (i <= 8) {
  // console.log("To trabalhando com loops");
  i++;
}

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (item, index, array) {
  console.log(item, index, array);
});
