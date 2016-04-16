/*
* @Author: ManrajGrover
* @Date:   2016-04-06 15:58:03
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-16 12:32:50
*/

(function(root, factory){
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.microbar = factory();
    }
})(this, function(){
    var css = '.microbar{width: 100%;height: 2px;z-index: 9999;top:0;background-color: transparent;}'
            + '.microbar .mprogress{width: 0;height: 100%;background-color: #000000;}'
            + '.microbar .mprogress .mshadow{width: 3%;position: relative;height: 100%;float: right;transform: rotate(2deg) translate(0px,-3px);}';
    function getEquivalentTime(speed){
        return (0.5 + Math.round(1/speed)).toString()+'s';
    }

    function isColor(color){
        var el = document.createElement('div');
        el.style.backgroundColor = color;
        if(el.style.backgroundColor.length == 0)
            throw new Error('Please check the color entered');
    }

    function transitionEndEventName () {
        var el = document.createElement('div'), transitions = { 'transition':'transitionend', 'OTransition':'otransitionend', 'MozTransition':'transitionend', 'WebkitTransition':'webkitTransitionEnd'};
        for(var i in transitions) {
            if (transitions.hasOwnProperty(i) && el.style[i] !== undefined)
                return transitions[i];
        }
        return null;
    }

    function addStyleSheet(){
        if(document.getElementById('microbarstyles') != undefined)
            return;
        var style = document.createElement('style');
        style.type = 'text/css', style.id = 'microbarstyles';
        if(style.styleSheet){
            style.styleSheet.cssText = css;
        }
        else{
            style.appendChild(document.createTextNode(css));
        }
        document.head.insertBefore(style, null);
    }

    function initialize(id, color, percentage, speed){
        addStyleSheet();isColor(color);
        var bar = document.createElement('div'), progress = document.createElement('div'), shadow = document.createElement('div'), time = getEquivalentTime(speed);
        bar.id = id, bar.className = 'microbar';
        progress.classList.add('mprogress') , progress.style.backgroundColor = color, progress.style.width = percentage+'%', progress.style.transition = 'width '+time+' ease, opacity 0.3s ease';
        shadow.classList.add('mshadow'), shadow.style.boxShadow = "0 0 10px "+color;
        if(percentage == 0)
            progress.style.opacity = 0;
        progress.appendChild(shadow);
        bar.appendChild(progress);
        var transitionEnd = transitionEndEventName();
        if(transitionEnd == null)
            throw new Error('Your browser is not supported.');
        progress.addEventListener(transitionEnd, function(){
            var width = this.style.width;
            if(width == '100%')
                this.style.opacity = 0;
        });
        return {bar: bar, progress: progress, shadow: shadow};
    }

    return function microbar(args){
        args = args || {};
        
        if(!args.hasOwnProperty('id') || typeof args['id'] !== 'string')
            throw new Error('You need to provide an ID of type string for your microbar.');
        if(args.hasOwnProperty('speed') && (typeof args.speed !== 'number' || args.speed > 10 || args.speed < 1))
            throw new Error('Speed should be an integer between 1 and 10.');
        if(args.hasOwnProperty('percentage') && (typeof args.percentage !== 'number' || args.percentage> 100 || args.percentage < 0))
            throw new Error('Percentage should be an integer between 0 and 100.');

        var percentage = args.percentage || 0,
            color = args.color || '#000000',
            speed = args.speed || 10,
            id = args.id;

        var divs = initialize(id, color, percentage, speed);
        var bar = divs['bar'], progress = divs['progress'], shadow = divs['shadow'];
        if(args.target) {
            bar.style.position = 'relative';
            document.getElementById(args.target).insertBefore(bar, document.getElementById(args.target).firstChild);
        }
        else {
            bar.style.position = 'fixed';
            document.getElementsByTagName('body')[0].appendChild(bar);
        }
        return {
            id: args.id,
            moveTo: function(percentage){
                if(typeof percentage !== 'number' || percentage > 100 || percentage < 0)
                    throw new Error('Percentage should be an integer between 0 and 100.');
                progress.style.opacity = 1;
                progress.style.width = percentage+'%';
            },
            getColor: function(){
                return color;
            },
            setColor: function(color){
                isColor(color);
                progress.style.backgroundColor = color;
                shadow.style.boxShadow = "0 0 10px "+color;
            },
            getSpeed: function(){
                return speed;
            },
            setSpeed: function(s){
                if(s > 10 || s < 1)
                    throw new RangeError('Speed should be an integer between 1 and 10');
                speed = s;
                progress.style.transition = 'width '+getEquivalentTime(s);
            }
        };
    };
});