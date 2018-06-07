// var url = require('url');
// console.log(url.parse(window.location.href));
var Three = require('three')

function init() {
	var Three = require('three')
	var scene = new Three.Scene();

	var box = getBox(1, 1, 1);
	box.position.y = box.geometry.parameters.height/2;

	var plane = getPlane(4);
	plane.rotation.x = Math.PI/2;

	scene.add(box);
	scene.add(plane);

	var camera = new Three.PerspectiveCamera(
	    45,
	    window.innerWidth/window.innerHeight,
	    1,
	    1000
		);
	camera.position.x = 1;
	camera.position.y = 2;
	camera.position.z = 5;

	camera.lookAt(new Three.Vector3(0, 0, 0));

	var renderer = new Three.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild( renderer.domElement );
	renderer.render(
		scene,
		camera
	);

	return scene;
}

function getBox(w, h, d) {
	var geometry = new Three.BoxGeometry(w, h, d);
	var material = new Three.MeshBasicMaterial({
		color: 0x0000ff
	});
	var mesh = new Three.Mesh(
		geometry,
		material
	);

	return mesh;
}

function getPlane(size) {
	var geometry = new Three.PlaneGeometry(size,size);
	var material = new Three.MeshBasicMaterial({
		color: 0xffff00,
		side: Three.DoubleSide
	});
	var mesh = new Three.Mesh(
		geometry,
		material
	);

	return mesh;
}

var scene = init();