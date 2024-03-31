// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat() {
  cats.push("Ralph");
}

destructivelyAppendCat();

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyPrependCat() {
  cats.unshift("Bob");
}

destructivelyPrependCat();

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveLastCat() {
  cats.pop();
}

destructivelyRemoveLastCat();

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveFirstCat() {
  cats.shift();
}
destructivelyRemoveFirstCat();

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function appendCat(addedCat) {
  const newCats = [...cats, addedCat];
  return newCats;
}

appendCat();

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function prependCat(addedCatFront) {
  const updatedCats = [addedCatFront, ...cats];
  return updatedCats;
}

prependCat();

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function removeLastCat() {
  const slicedCats = cats.slice(0, 2);
  return slicedCats;
}

removeLastCat();

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function removeFirstCat() {
  const reslicedCats = cats.slice(1, 3);
  return reslicedCats;
}

removeFirstCat();

// function appendCat(catName) {
//   const catsAppend = [...cats, `${catName}`];
//   //console.log(catsAppend);
// }

// appendCat("Broom");
