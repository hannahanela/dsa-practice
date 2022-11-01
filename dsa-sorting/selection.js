"use strict";

/**
 * Selection Sort Algorithm
 * 
 * O(n**2) runtime
 * 
 */

function selectionSort(arr) {
  let minIdx = 0;

  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    minIdx = i+1;
  }

  return arr;
}

/**
 * version with helper function for comparison.
 */

// Returns index of the biggest item in an array.
// function findIndexOfBiggest(arr) {
//   let biggest = arr[0];
//   let biggestIndex = 0;

//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] > biggest) {
//       biggest = arr[i];
//       biggestIndex = i;
//     }
//   }

//   return biggestIndex;
// }

// function selectionSort(arr) {
//  let sortedArr = [];
 
//  while (arr.length > 0) {
//   let indexOfBiggest = findIndexOfBiggest(arr);
//   sortedArr.push(arr[indexOfBiggest]);
//   arr.splice(indexOfBiggest, 1);
//  }

//   return sortedArr;
// }

module.exports = selectionSort;