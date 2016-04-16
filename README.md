# microbar

A zero dependency, 1.2kb g-zipped, lightweight JavaScript Library for slim progress bars for Ajax'y applications. Inspired by YouTube and Github.

![Gif](https://github.com/ManrajGrover/microbar/blob/master/Screenshots/giphy.gif)

## Usage

### How to Load?

Link `microbar.js` in your HTML

```
<script src="path/to/microbar.js"></script>
```

### Generate microbar

```
var microbar = new microbar( settings );
```

#### settings

`settings` is a JSON Object in which you can specify various options.

* `percentage` `<integer>`: (Optional) Initial starting position of **progress** bar
