// const imgs = document.querySelectorAll("img");

// let i = 0;
// imgs.forEach(function (item, index, array) {
//   // console.log(item, index, array);
// });

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (i) {
  // console.log(i);
});

const imgs = document.querySelectorAll("img");

// let i = 0;
// imgs.forEach((item) => {
//   console.log(item);
// });

let i = 0;
//sintaxe normal
imgs.forEach(function () {
  console.log(i++);
});

//utilizando arrow function
imgs.forEach((item) => console.log(i++));
