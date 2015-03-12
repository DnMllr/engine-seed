'use strict';

/**
 * Module dependencies
 */
var Origin = require('famous-components').Origin;
var Rotation = require('famous-components').Rotation;
var Position = require('famous-components').Position;
var Align = require('famous-components').Align;
var Size = require('famous-components').Size;
var Mesh = require('famous-webgl-renderables').Mesh;
var Geometry = require('famous-webgl-geometries').Sphere;
var Famous = require('famous-core').Famous;
var Clock = Famous.getClock();

/**
 * Sphere view constructing a basic WebGL mesh
 */
function Sphere(node) {
    this.dispatch = node.getDispatch();
    this.position = new Position(this.dispatch);
    this.rotation = new Rotation(this.dispatch);
    this.align = new Align(this.dispatch);
    this.size = new Size(this.dispatch);
    this.mesh = new Mesh(this.dispatch);

    /**
     * Set the geometry to any of the given primitives: e.g. we have the Icosahedron required in above
     * Set its color with (rgb, hsl, hex, color, hsv):
     * Example: setColor('red'), setColor('#ff0000'), setColor(255, 0, 0)
     *          setColor('hsl', 0, 100, 50), setColor('hex', '#ff0000'), setColor('rgb', 255, 0, 0), etc.
     */
    this.mesh.setGeometry(new Geometry({ detail: 100 }));
    this.mesh.setBaseColor('#ff0000');

    this.align.set(0.5, 0.5, 0.5);
    this.size.setAbsolute(400, 400, 400);

    /**
     * Call the update method on every 'tick'
     */
    Clock.update(this);
}


/**
 * Move the mesh around in the scene
 */
Sphere.prototype.update = function() {
    var delta = Date.now() * 0.0003;
    this.rotation.setY(delta);
    this.position.setX(Math.sin(delta) * 900);
};


/**
 * Expose
 */
module.exports = Sphere;