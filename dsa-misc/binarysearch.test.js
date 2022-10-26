"use strict";

const binarySearch = require("./binarysearch")

describe('binarySearch', function() {
    it('should exist', function() {
        expect(typeof binarySearch).toBe(
            'function',
            "did you remember to define the 'binarySearch function?"
        );
    });

    it('should return sought value', function() {
      expect(binarySearch([4, 7, 9, 10, 12, 20], 9)).toEqual(
        9,
        "binarySearch([4, 7, 9, 10, 12, 20], 9) should equal 9"
      );

      expect(binarySearch([-10, 0, 4, 7], 7)).toEqual(
        7,
        "binarySearch([-10, 0, 4, 7], 7) should equal 7"
      );

      expect(binarySearch([1, 2, 3], 1)).toEqual(
        1,
        "binarySearch([1, 2, 3], 1) should equal 1"
      );
    });

    it('should return null', function() {
      expect(binarySearch([], 1)).toEqual(
        null,
        "binarySearch([], 1) should equal null"
      );

      expect(binarySearch([1, 2, 3], 4)).toEqual(
        null,
        "binarySearch([1, 2, 3,], 4) should equal null"
      );
    });
});