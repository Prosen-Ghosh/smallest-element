# smallest-element
A JavaScript Package for finding the smallest element of an array.

![npm](https://img.shields.io/npm/v/smallest-element.svg) ![license](https://img.shields.io/npm/l/smallest-element.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/smallest-element.svg) 


![nodei.co](https://nodei.co/npm/smallest-element.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/smallest-element.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/smallest-element.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/smallest-element.svg)

## Features


## `npm` Install

`npm install --save smallest-element`


## Scripts Tag

#### For Development
```js
<script src=""></script>
```
#### For Production
```js
<script src=""></script>
```


## Usage

```js

const small = require('smallest-element');

small([1,2,3,-10]);
//=> -10

small([1,2,3,-10,{}]);
//=> -10

small([1,2,3,-10,-100,[]]);
//=> -100

small([]);
//=> null

small(); //withour parameter this function will throw a type error
//=> TypeError: smallest() expects an array parameter

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
