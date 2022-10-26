"use strict";

const selectionSort = require("./selection")

describe('selectionSort', function() {
  it('should exist', function() {
    expect(typeof selectionSort).toBe(
      'function',
      "did you remember to define the 'selectionSort' function?"
    );
  });

  it('should sort numbers in descending order', function() {
    expect(selectionSort([4, 20, 12, 10, 7, 9])).toEqual(
      [20, 12, 10, 9, 7, 4],
      "selectionSort([4, 200, 12, 10, 7, 9]) should equal[20, 12, 10, 9, 7, 4"
    );

    expect(selectionSort([0, -10, 7, 4])).toEqual(
      [7, 4, 0, -10],
      "selectionSort([0, -10, 7, 4]) should equal [7, 4, 0, -10]"
    );

    expect(selectionSort([3, 2, 1])).toEqual(
      [3, 2, 1],
      "selectionSort([3, 2, 1]) should equal [3, 2, 1]"
    );

    expect(selectionSort([])).toEqual(
      [],
      "selectionSort([]) should be []"
    );

    const nums = [
      4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546,
      75, 67, 4342, 32
    ];

    expect(selectionSort(nums)).toEqual([
      4342, 546, 453, 232, 232, 75, 67, 43, 35, 34, 34, 32, 32, 23, 5, 4, 4, 4,
      3, 3, 2],
    "selectionSort(nums) should equal [4342, 546, 453, 232, 232, 75, 67, 43, 35, 34, 34, 32, 32, 23, 5, 4, 4, 4, 3, 3, 2]"
    );
  });
});