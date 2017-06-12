class microbar {
  constructor(args = {}) {
    if (Object.prototype.hasOwnProperty.call(args, 'speed') &&
        (typeof args.speed !== 'number' || args.speed > 10 || args.speed < 1)) {
      throw new Error('Speed should be an integer between 1 and 10.');
    }
    if (Object.prototype.hasOwnProperty.call(args, 'percentage') &&
        (typeof args.percentage !== 'number' || args.percentage > 100 || args.percentage < 0)) {
      throw new Error('Percentage should be an integer between 0 and 100.');
    }

    this._percentage = args.percentage || 0;
    this._color = args.color || '#000000';
    this._speed = args.speed || 10;

    this._divs = this._initialize();

    this._bar = this._divs.bar;
    this._progress = this._divs.progress;
    this._shadow = this._divs.shadow;

    if (args.target) {
      this._bar.style.position = 'relative';

      document.getElementById(args.target).insertBefore(
        this._bar,
        document.getElementById(args.target).firstChild
      );
    } else {
      this._bar.style.position = 'fixed';

      document.getElementsByTagName('body')[0].appendChild(this._bar);
    }
  }

  _getEquivalentTime(speed) {
    const time = (0.5 + Math.round(1 / speed));
    return `${time}s`;
  }

  _isColor(color) {
    const el = document.createElement('div');
    el.style.backgroundColor = color;
    if (el.style.backgroundColor.length === 0) {
      return false;
    }
    return true;
  }

  _transitionEndEventName() {
    const el = document.createElement('div');
    const transitions = {
      transition: 'transitionend',
      OTransition: 'otransitionend',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
    };

    for (const transition of Object.keys(transitions)) {
      if (Object.prototype.hasOwnProperty.call(transitions, transition) &&
          el.style[transition] !== undefined) {
        return transitions[transition];
      }
    }
    return null;
  }

  _addStyleSheet() {
    if (document.getElementById('microbarstyles') !== null) {
      return;
    }

    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'microbarstyles';

    if (style.styleSheet) {
      style.styleSheet.cssText = microbar.css;
    } else {
      style.appendChild(document.createTextNode(microbar.css));
    }

    document.head.insertBefore(style, null);
  }

  _initialize() {
    this._addStyleSheet();
    if (!this._isColor(this._color)) {
      throw new Error('Please check the color entered');
    }

    const bar = document.createElement('div');
    const progress = document.createElement('div');
    const shadow = document.createElement('div');

    const time = this._getEquivalentTime(this._speed);

    bar.className = 'microbar';

    progress.classList.add('mprogress');
    progress.style.backgroundColor = this._color;
    progress.style.width = `${this._percentage}%`;
    progress.style.transition = `width ${time} ease, opacity 0.3s ease`;

    shadow.classList.add('mshadow');
    shadow.style.boxShadow = `0 0 10px ${this._color}`;

    if (this._percentage === 0) {
      progress.style.opacity = 0;
    }

    progress.appendChild(shadow);
    bar.appendChild(progress);

    const transitionEnd = this._transitionEndEventName();

    if (transitionEnd === null) {
      throw new Error('Your browser is not supported.');
    }

    progress.addEventListener(transitionEnd, this._transitionEnd);

    return {
      bar,
      progress,
      shadow
    };
  }

  _transitionEnd() {
    const width = this.style.width;
    if (width === '100%') {
      this.style.opacity = 0;
    }
  }

  moveTo(point) {
    if (typeof point !== 'number' || point > 100 || point < 0) {
      throw new Error('Percentage should be an integer between 0 and 100.');
    }

    this._progress.style.opacity = 1;
    this._progress.style.width = `${point}%`;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    if (!this._isColor(color)) {
      throw new Error('Please check the color entered');
    }
    this._color = color;

    this._progress.style.backgroundColor = color;
    this._shadow.style.boxShadow = `0 0 10px ${color}`;
  }

  get speed() {
    return this._speed;
  }

  set speed(speed) {
    if (speed > 10 || speed < 1) {
      throw new RangeError('Speed should be an integer between 1 and 10.');
    }

    this._speed = speed;

    const time = this._getEquivalentTime(speed);
    this._progress.style.transition = `width ${time}`;
  }
}

microbar.css = '.microbar{width: 100%;height: 2px;z-index: 9999;top:0;background-color: transparent;}'
             + '.microbar .mprogress{width: 0;height: 100%;background-color: #000000;}'
             + '.microbar .mprogress .mshadow{width: 1%;position: relative;height: 100%;float: right;}';

module.exports = microbar;
