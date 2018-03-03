# microbar

[![Build Status](https://travis-ci.org/ManrajGrover/microbar.svg?branch=master)](https://travis-ci.org/ManrajGrover/microbar)  [![Build status](https://ci.appveyor.com/api/projects/status/jr9rgx05r0y7fv70/branch/master?svg=true)](https://ci.appveyor.com/project/ManrajGrover/microbar/branch/master)
 [![npm version](https://badge.fury.io/js/microbar.svg)](https://www.npmjs.com/package/microbar) [![npm](https://img.shields.io/npm/dt/microbar.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/microbar) ![awesome](https://img.shields.io/badge/awesome-yes-green.svg)

> 🎉 A zero dependency, 1.2kb g-zipped, lightweight JavaScript Library for slim progress bars for Ajax'y applications. Inspired by YouTube and Github.

![Gif](https://raw.githubusercontent.com/ManrajGrover/microbar/master/assets/demo.gif)

## Installation

Download and extract [latest release](https://github.com/ManrajGrover/microbar/releases) or install using package manager:

[npm](https://www.npmjs.com/package/microbar)

```sh
$ npm install microbar
```
[bower](http://bower.io/)

```sh
$ bower install microbar
```

Or use `unpkg`:

```html
<script src="https://unpkg.com/microbar/dist/microbar.min.js"></script>
```


## Usage

### How to Load?

Link `microbar.js` in your HTML

```html
<script src="path/to/microbar.js"></script>
```

or require it:

```js
const microbar = require('path/to/microbar');
```

### Generate microbar

```js
const microbar = new microbar( settings );
```

#### settings

`settings` is a JSON Object in which you can specify various options.

* `percentage` `<integer>`: (Optional) Initial starting position of **progress** bar ( between `0` and `100` ). By default, it will be 0.
* `color` `<string>`: (Optional) Color of your **progress** bar. By default, it will be `black`.
* `speed` `<integer>`: (Optional) Speed of your **progress** bar ( between `1` and `10` ). By default, it will be `10`.
* `target` `<id>`: (Optional) ID of your targetted DOM element. By default, it will be fixed to `top` of document.

### Methods available

* `moveTo( percentage )`: Set percentage width of `progress` bar.
* `getColor( )`: Get color of that `progress` bar.
* `setColor( color )`: Set color of `progress` bar.
* `getSpeed( )`: Get speed of `progress` bar.
* `setSpeed( speed )`: Set speed of `progress` bar.

If you would like to add more methods/customizations, please open an [issue](https://github.com/ManrajGrover/microbar/issues).

### Example

```js

const settings = {
    percentage: 50,
    color: 'red',
    speed: 2,
    target: 'lolCat'
};

const bar = new microbar(settings);

// Move bar forward
bar.moveTo(80);

// Get color of progress bar
bar.getColor();

// Set color of progress bar
bar.setColor('#141414');

// Get speed of progress bar
bar.getSpeed();

// Set speed of progress bar
bar.setSpeed(3);
```

## Development

Run:

```sh
$ git clone https://github.com/ManrajGrover/microbar.git
$ cd microbar
$ npm install
```

This will setup the library dependencies for you.

To lint your code, run

```sh
$ npm run lint
```

To build for development purpose, run

```sh
$ npm run dev
```

To build for production purpose, run

```sh
$ npm run prod
```

## License

[MIT](https://github.com/ManrajGrover/microbar/blob/master/LICENSE) © [ManrajGrover](https://github.com/ManrajGrover)
