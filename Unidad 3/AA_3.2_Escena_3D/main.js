import * as THREE from 'three';

// ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x141826);

// CÁMARA 
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

// WEBGL
const canvasElement = document.querySelector('#escena3D');

const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// OBJETOS MESH - ESFERA
const geometry = new THREE.SphereGeometry(1.5, 64, 64);

const material = new THREE.MeshStandardMaterial({
    color: 0x0066cc,
    roughness: 0.3,
    metalness: 0.8,
    wireframe: true
});

const esfera = new THREE.Mesh(geometry, material);
scene.add(esfera);

// ILUMINACIÓN
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// ANIMACIÓN
function animate() {
    requestAnimationFrame(animate);

    esfera.rotation.x += 0.01;
    esfera.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// RESPONSIVIDAD 
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});