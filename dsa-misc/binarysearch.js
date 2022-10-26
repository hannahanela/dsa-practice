"use strict";

/**
 * Binary Search Algorithm
 * 
 * O(log2 n)
 * 
 * Takes a sorted list and a sought value, returns index of value or -1.
 * 
 */

function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length-1;

  while (low <= high) {
    let mid = Math.floor((low+high)/2);
    let guess = arr[mid];

    if (guess === val) {
      return mid;
    } else if (guess > val) {
      high = mid-1;
    } else {
      low = mid+1;
    }
  }

  return -1;
}

module.exports = binarySearch;