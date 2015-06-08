'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

// Boilerplate
FamousEngine.init()

// App Code
var scene = FamousEngine.createScene();
var root = scene.addChild();
var child = root.addChild();

new DOMElement(child.addChild().setSizeMode('absolute', 'absolute').setAbsoluteSize(100, 100), {
    properties: {
                    backgroundColor: 'red'
                }
});


new DOMElement(child.addChild().setSizeMode('absolute', 'absolute').setAbsoluteSize(100, 100).setAlign(0.5).setMountPoint(0.5), {
    properties: {
                    backgroundColor: 'red'
                }
});

new DOMElement(child.addChild().setSizeMode('absolute', 'absolute').setAbsoluteSize(100, 100).setAlign(1).setMountPoint(1), {
    properties: {
                    backgroundColor: 'red'
                }
});

FamousEngine.getClock().setTimeout(function () {

    var el = new DOMElement(child, {
        properties: {
                        backgroundColor: 'blue'
                    }
    });

}, 0);

new DOMElement(root, {
    properties: {
                    backgroundColor: 'yellow'
                }
});


FamousEngine.getClock().setInterval(function () {
    var x = Math.random();
    var y = Math.random();
    new DOMElement(child.addChild().setSizeMode('absolute', 'absolute').setAbsoluteSize(100, 100).setAlign(x, y).setMountPoint(x, y), {
        properties: {
                        backgroundColor: 'red'
                    }
    });
}, 2000);
