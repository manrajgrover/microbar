# microbar

A zero dependency, 1.2kb g-zipped, lightweight JavaScript Library for slim progress bars for Ajax'y applications. Inspired by YouTube and Github.

![Gif](https://github.com/ManrajGrover/microbar/blob/master/Screenshots/giphy.gif)

## Usage

### How to Load?

Link `microbar.js` in your HTML

```html
<script src="path/to/microbar.js"></script>
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
