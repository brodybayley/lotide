# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bbayley/lotide`

**Require it:**

`const _ = require('@bbayley/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: get the first element of array
* `function2(tail)`: get all but the first element of array
* `function3(middle)`: get middle-most element(s) of array
* `function4(countLetters)`: get count of each letter in a string
* `function5(countOnly)`: get count for a subset of items in an array
* `function6(eqArrays)`: takes two arrays and returns a boolean based on perfect match
* `function7(eqObjects)`: takes two objects and returns a boolean based on perfect match
* `function8(findKey)`: takes object and callback and return first key that returns truthy value
* `function9(letterPositions)`: Return all indices in a string where characters are found
* `function10(map)`: takes in a array and map and return a new array based on callback results
* `function11(takeUntil)`: takes in an array and callback and collects items from the array until callback returns truthy
* `function12(without)`: will return subset of a given array, removing unwanted elements