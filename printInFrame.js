const printInFrame = function(list) {
  list = list.split(' '); // is an array of each word
  const longest = longestStr(list).length;
  const border = repeat('*', longest + 3); // because there's a * and a ' ' to start each line, there should be a star to make up for those. 

  console.log(border); // top border
  for (const word of list) {
    // adds a * at the beginning and the end. fills space in the middle so all lines are equal to the longest word
    console.log(`* ${word}${repeat(' ', longest - word.length)}*`);
  }
  console.log(border); // bottom border 
};

const repeat = function(str, times) {
  let result = str; // default starts with 1 instance of the string then concats extras

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
};

const longestStr = function(list) {
  let longest = list[0];

  for (const str of list) {
    if(str.length > longest.length) { // add this to check if it's longer first, rather than just assigning it str every time. Otherwise, longest is always the last word. 
    longest = str;
    }
  }

  return longest;
};

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
