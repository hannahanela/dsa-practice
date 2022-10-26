"use strict";

/**
 * Selection Sort Algorithm
 * 
 * O(n**2) runtime
 * 
 * Ex: Given a list of numbers, return the list sorted biggest to smallest.
 * 
 */


// Returns index of the biggest item in an array.
function findIndexOfBiggest(arr) {
    let biggest = arr[0];
    let biggestIndex = 0;

    for (let i=0; i<arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
            biggestIndex = i;
        }
    }

    return biggestIndex;
}


function selectionSort(arr) {
 let sortedArr = [];
 
 while (arr.length > 0) {
    let indexOfBiggest = findIndexOfBiggest(arr);
    sortedArr.push(arr[indexOfBiggest]);
    arr.splice(indexOfBiggest, 1);
 }

 return sortedArr;
}

module.exports = selectionSort ;