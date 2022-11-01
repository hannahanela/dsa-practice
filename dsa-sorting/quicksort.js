"use strict";

/**
 * Quicksort Algorithm
 * 
 * O(n log n) average runtime
 * 
 */

// does not handle duplicates; worst runtime O(n**2)
function quicksort(arr) {
    if (arr.length < 2) return arr;

    let pivot = [arr[0]];
    let less = [];
    let greater = [];

    for (let i=1; i<arr.length; i++) {
        if (arr[i] > pivot) {
            greater.push(arr[i]);
        } else if (arr[i] < pivot) {
            less.push(arr[i]);
        }
    }

    return quicksort(less).concat(pivot, quicksort(greater));
}

module.exports = quicksort;