'use strict';

var Context = require('famous-api').Context;

var Scene = require('../../fixtures/Scene');
var OBJLoader = require('famous-webgl-geometries').OBJLoader;
var OBJView = require('./OBJView');
var DynamicGeometry = require('famous-webgl-geometries').DynamicGeometry;
var Material = require('famous-webgl-materials').Material;
var Box = require('famous-webgl-geometries').Box;

var scene = new Scene();

OBJLoader.load('obj/coke_bottle_v2.obj', function(buffers) {
    geometry.setVertexPositions(buffers.vertices);
	geometry.setNormals(buffers.normals);
	geometry.setTextureCoords(buffers.textureCoords);
	geometry.setIndices(buffers.indices);
});

var geometry = new DynamicGeometry();
var uvMaterial = Material.normal();

var OBJModel = {
	geometry: geometry,
	material: uvMaterial
};

OBJModel.constructor.renderWith = OBJView;

new Context(OBJModel, 'body');