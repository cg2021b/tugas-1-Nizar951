import * as THREE from './modul/js/three.module.js';
import {OrbitControls} from './modul/js/OrbitControls.js';
import {GLTFLoader} from './modul/js/GLTFLoader.js';
import {Reflector} from './modul/jsm/objects/Reflector.js';
import * as dat from './modul/jsm/libs/dat.gui.module.js'

class FogGUIHelper {
  constructor(fog, backgroundColor) {
    this.fog = fog;
    this.backgroundColor = backgroundColor;
  }
  get near() {
    return this.fog.near;
  }
  set near(v) {
    this.fog.near = v;
    this.fog.far = Math.max(this.fog.far, v);
  }
  get far() {
    return this.fog.far;
  }
  set far(v) {
    this.fog.far = v;
    this.fog.near = Math.min(this.fog.near, v);
  }
  get color() {
    return `#${this.fog.color.getHexString()}`;
  }
  set color(hexString) {
    this.fog.color.set(hexString);
    this.backgroundColor.set(hexString);
  }
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene();

// Dat GUI
const gui = new dat.GUI()

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
camera.position.x = -15;
camera.position.y = 10;
camera.position.z = 20;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true;


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.render(scene, camera, controls);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.gammaOutput = true;


/**
 * Panorama 
 */
const panorama = new THREE.CubeTextureLoader();
const hutan = panorama.load([
  'env/px.png',
  'env/nx.png',
  'env/py.png',
  'env/ny.png',
  'env/pz.png',
  'env/nz.png',

]);
scene.background = hutan;

/**
 * Object: Sphere (for Sun)
 */
let geometry = new THREE.SphereGeometry(1.54, 10, 10);
const loader3 = new THREE.TextureLoader();
loader3.load('img/sunmap.jpg', (sun) => {
  const material = new THREE.MeshBasicMaterial({
    map: sun,
  });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.x = 0;
  sphere.position.z = 20;
  sphere.position.y = 20;
  scene.add(sphere);

});

/**
 * Object: Plane
 */

const loader4 = new THREE.TextureLoader();
const grass = loader4.load('./img/free_texture_dirt_02.jpg');
grass.wrapS = THREE.RepeatWrapping;
grass.wrapT = THREE.RepeatWrapping;
const repeats = 10;
grass.repeat.set(repeats, repeats);

let grassPlane = new THREE.BoxGeometry(40, 40);
let grassMaterial = new THREE.MeshLambertMaterial({
    map:grass

});

let plane = new THREE.Mesh(grassPlane,grassMaterial);
plane.rotation.x = Math.PI / 2;
plane.position.y = -5.5;
plane.receiveShadow = true;
scene.add(plane);

const loader = new GLTFLoader()
loader.load('./brass_canon/scene.gltf', function(gltf){
        const root = gltf.scene;
        root.position.x = 0;
        root.position.y = -5;
        scene.add(root);
        root.traverse(n => { if ( n.isMesh ) {
          n.castShadow = true; 
          n.receiveShadow = true;
        }});

})

const gun = new GLTFLoader()
gun.load('./gun/scene.gltf', function(gltf){
        const root = gltf.scene;
        root.position.x = 10;
        root.position.y = 0;
        root.position.z = 8;
        scene.add(root);

        gltf.scene.scale.set(10, 10, 10); 
        root.traverse(n => { if ( n.isMesh ) {
          n.castShadow = true; 
          n.receiveShadow = true;
        }});

})

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-100,200,100);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x000000);
scene.add(ambientLight);

const solarLight = new THREE.DirectionalLight();
solarLight.position.set(0, 500, 500);
solarLight.castShadow = true;
solarLight.intensity = 2;
solarLight.shadow.mapSize.width = 1024;
solarLight.shadow.mapSize.height = 1024;
solarLight.shadow.camera.near = 250;
solarLight.shadow.camera.far = 1000;

let intensity=50;

solarLight.shadow.camera.left = -intensity;
solarLight.shadow.camera.right = intensity;
solarLight.shadow.camera.top = intensity;
solarLight.shadow.camera.bottom  = -intensity;
scene.add(solarLight);

// directional light helper
const directionalLightFolder = gui.addFolder('Directional Light');
directionalLightFolder.add(solarLight, 'visible');
directionalLightFolder.add(solarLight.position, 'x').min(-500).max(500).step(10);
directionalLightFolder.add(solarLight.position, 'y').min(-500).max(500).step(10);
directionalLightFolder.add(solarLight.position, 'z').min(-500).max(500).step(10);
directionalLightFolder.add(solarLight, 'intensity').min(0).max(10).step(0.1);

/**
 * Fog
 */
 const near = 20;
 const far = 70;
 const color = 0xf0b772;
scene.fog = new THREE.Fog(color, near, far);

// fog helper
const fogGUIHelper = new FogGUIHelper(scene.fog, scene.background);
gui.add(fogGUIHelper, 'near', near, far).listen();
gui.add(fogGUIHelper, 'far', near, far).listen();
gui.addColor(fogGUIHelper, 'color');

/**
 * Object: Mirror
 */

let planeMirror = new THREE.PlaneGeometry( 40, 20 );
const verticalMirror = new Reflector( planeMirror, {
  clipBias: 0.003,
  textureWidth: window.innerWidth * window.devicePixelRatio,
  textureHeight: window.innerHeight * window.devicePixelRatio,
  color: 0x889999
} );
verticalMirror.position.y = 5.5;
verticalMirror.position.z = - 20;
scene.add( verticalMirror );

/**
 * Object: Reflective Sphere
 */
 const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { format: THREE.RGBFormat, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );
 let sphereCamera = new THREE.CubeCamera(1,500,cubeRenderTarget);
 sphereCamera.position.set(0, 10, 20);
 scene.add(sphereCamera);
 const sphereMirror = new THREE.MeshBasicMaterial({
   envMap: sphereCamera.renderTarget.texture,
 });
 const sphereGeo = new THREE.SphereGeometry(1.5, 32 , 16);
 const mirrorBall = new THREE.Mesh( sphereGeo, sphereMirror);
 mirrorBall.position.y = 10;
 mirrorBall.position.x = 0;
 mirrorBall.position.z = 20;
 scene.add(mirrorBall);
 
/**
 * Animate
 */
const tick = () =>
{

    // Update Orbital Controls
    controls.update();

    // Render
    renderer.render(scene, camera);
    sphereCamera.update(renderer, scene);
    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}
tick();