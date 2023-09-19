import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./style.css";
import coordinates from "./coordinates.json";
let mousePos = { x: 0, y: 0 };
let rotationOffset = 0;
let ang = 0;
let points = [];

//Def pointlight
const purpleLight = new THREE.PointLight("#7B1BF9", 200, 10);
purpleLight.position.set(-4, 2, 2);
purpleLight.add(new THREE.AxesHelper(1));

const globeGroup = new THREE.Group();
const texture = new THREE.TextureLoader().load("/world.jpg");
const scene = new THREE.Scene();
console.log("encoding", texture);
texture.colorSpace = THREE.SRGBColorSpace;
const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//Renderer setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.outputColorSpace = THREE.DisplayP3ColorSpace;
renderer.setPixelRatio(2);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, document.body);

//Globe
const globeRadius = 2;
const geometry = new THREE.SphereGeometry(globeRadius, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#000000",
  map: texture,
  emissive: "#ffffff",
  emissiveMap: texture,
  emissiveIntensity: 1,
  //wireframe: true,
});

material.side = THREE.DoubleSide;
const globe = new THREE.Mesh(geometry, material);

globeGroup.add(globe);
camera.position.set(-1, 1, 5);

coordinates.coordinates.map((c) => {
  console.log(c);
  const v = latLonToXYZ(globeRadius, c.lat * -1, c.lon);
  //console.log(v);

  const p = new THREE.SphereGeometry(0.02 * Math.random() + 0.005, 16, 16);

  const m = new THREE.MeshBasicMaterial({
    color: "#7B1BF9",
  });

  const pointMesh = new THREE.Mesh(p, m);
  pointMesh.position.copy(v);
  globeGroup.add(pointMesh);
  points.push({ mesh: pointMesh, connections: [] });
});

points.map((thisPoint, i) => {
  for (const other of points) {
    if (thisPoint != other) {
      const d = thisPoint.mesh.position.distanceTo(other.mesh.position);
      if (d < globeRadius / 5) {
        const connection = createConnection(
          new THREE.Vector3().copy(thisPoint.mesh.position),
          new THREE.Vector3().copy(other.mesh.position),
          30,
          1 + 0.5 * Math.random()
        );

        console.log("p connections: ", thisPoint.connections);
        console.log("other", other);
        if (thisPoint.connections.includes(thisPoint) == false) {
          thisPoint.connections.push(thisPoint);
          globeGroup.add(connection);
        }
      }
      //console.log(d);
    }
  }
});

console.log(globeGroup);

const pointLightHelper = new THREE.PointLightHelper(purpleLight, 0.5);

//Add elements to the scene
scene.add(pointLightHelper);
scene.add(purpleLight);
scene.add(globeGroup);

//Animation loop
function animate() {
  requestAnimationFrame(animate);
  globeGroup.rotation.y = ang + mousePos.x / window.innerWidth;
  globeGroup.rotation.x = 0 + mousePos.y / window.innerHeight;

  //Renderer update

  renderer.render(scene, camera);
  ang += 0.001;
  rotationOffset += 0.002;
}
//Call loop function
animate();

//Utility functions

window.addEventListener("mousemove", (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
});

window.addEventListener("resize", (event) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

//Convert latitude and longitude values to spherical coordinates providing the radius of the sphere
function latLonToXYZ(radius, lat, lon) {
  // Convert latitude and longitude from degrees to radians
  const theta = radians(lat);
  const phi = radians(lon);

  const x = radius * Math.cos(theta) * Math.cos(phi);
  const y = -radius * Math.sin(theta);
  const z = -radius * Math.cos(theta) * Math.sin(phi);

  return new THREE.Vector3(x, y, z);
}

//Function that converts degrees to radians values
function radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

function createConnection(a, b, res, ext) {
  const p1 = a;
  const p2 = b;
  const origin = new THREE.Vector3(0, 0, 0);
  const c1 = new THREE.Vector3()
    .subVectors(a, origin)
    .normalize()
    .multiplyScalar(globeRadius * ext);
  const c2 = new THREE.Vector3()
    .subVectors(b, origin)
    .normalize()
    .multiplyScalar(globeRadius * ext);
  //console.log(p1, p2, c1, c2);

  const curve = new THREE.CubicBezierCurve3(p1, c1, c2, p2);

  const bezierPoints = curve.getPoints(res);

  const curveGeometry = new THREE.BufferGeometry().setFromPoints(bezierPoints);
  const bezierMaterial = new THREE.LineBasicMaterial({
    color: 0x480f93,
  });
  const bezierObject = new THREE.Line(curveGeometry, bezierMaterial);

  return bezierObject;
}
