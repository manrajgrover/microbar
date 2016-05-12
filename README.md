# microbar

[![npm version](https://badge.fury.io/js/microbar.svg)](https://www.npmjs.com/package/microbar) ![awesome](https://img.shields.io/badge/awesome-yes-green.svg)

A zero dependency, 1.2kb g-zipped, lightweight JavaScript Library for slim progress bars for Ajax'y applications. Inspired by YouTube and Github.

![Gif](https://raw.githubusercontent.com/ManrajGrover/microbar/master/Screenshots/giphy.gif)

## Installation

Download and extract [latest release](https://github.com/ManrajGrover/microbar/releases) or install using package manager:

[npm](https://www.npmjs.com/package/microbar)

```
$ npm install microbar
```
[bower](http://bower.io/)

```
$ bower install microbar
```


## Usage

### How to Load?

Link `microbar.js` in your HTML

```html
<script src="path/to/microbar.js"></script>
```

or require it:

```js
var microbar = require('path/to/microbar');
```

### Generate microbar

```js
var microbar = new microbar( settings );
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

var settings = {
    percentage: 50,
    color: 'red',
    speed: 2,
    target: 'lolCat'
};

var bar = new microbar( settings);

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

## License

```
The MIT License (MIT)

Copyright (c) 2016 Manraj Singh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
