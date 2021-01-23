// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const getRandomElem = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}
