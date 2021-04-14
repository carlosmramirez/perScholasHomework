function changeColor() {
  document.getElementById("user-input").style.color = "blue";
}

function numOfArgs(...args) {
  return args.length;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function findLongestWord(arr) {
  let longestWord = '';
  let longestLength = 0;
  for(let i = 0; i < arr.length; i++) { 
    if (arr[i].length > longestLength) {
      longestLength = arr[i].length;
      longestWord = arr[i];
    }
  }
  return longestWord + " is the word with the longest length of " + longestLength; 
}

function filterLongWords(arr, filterLength) {
  longWordArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].length)
    if (arr[i].length > filterLength) {
      longWordArr.push(arr[i]);
    }
  }
  return longWordArr;
}