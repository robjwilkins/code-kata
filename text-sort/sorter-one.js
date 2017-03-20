function sort(inputTxt, direction) {
  "use strict";
  let charMap = {};
  let charArray = inputTxt.split('');
  for (let i = 0; i < charArray.length; i++) {
    let char = charArray[i].toLocaleLowerCase();
    if (charMap.hasOwnProperty(char)) {
      charMap[char] += char;
    } else {
      charMap[char] = char;
    }
  }
  let sortOrder = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let response = "";
  let sortOrderLength = sortOrder.length;
  for (let i = 0; i < sortOrderLength; i++) {
    let index = i;
    if (direction === 'desc') {
      index = sortOrderLength - (i+1);
    }
    let letter = sortOrder[index];
    if (charMap.hasOwnProperty(letter)) {
      response += charMap[letter];
    }
  }
  return response;
}

exports.sort = sort;
