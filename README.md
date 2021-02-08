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
* `function5(eqObjects)`: takes two objects and returns a boolean based on perfect match
* `function5(countOnly)`: get count for a subset of items in an array