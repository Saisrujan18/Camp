// import * as THREE from 'three'
// export function homepage_anim()
// {
//     var scene, camera, renderer
//     var light, box
    
//     init()
//     return(
//         <div />
//     )
    
//     //Initializing all the necessary components
//     function init()
//     {
//         //The basic components necessary are SCENE, CAMERA, RENDERER
//         scene = new THREE.Scene()
//         scene.background = new THREE.Color(0x000080)

//         //Any object/mesh you add to a scene requires a geometry and a material
//         const geometry = new THREE.BoxGeometry(1, 1, 1)
//         const material = new THREE.MeshStandardMaterial({color : new THREE.Color(0xaaaaaa), metalness : 0.7, roughness : 0.2})
//         box = new THREE.Mesh(geometry, material)
//         box.position.set(0, 0, 5)


//         light = new THREE.DirectionalLight(new THREE.Color(0xffffff), 0.8)
//         light.position.set(0, 1, 3)

//         const pointlight1 = new THREE.PointLight(new THREE.Color(0xdc143c), 1, 100)
//         pointlight1.position.set(-0.4, 0, 6)

//         const pointlight2 = new THREE.PointLight(new THREE.Color(0x5fd85f), 1, 100)        
//         pointlight2.position.set(0.4, 0, 6)

//         scene.add(box)
//         scene.add(light)
//         scene.add(pointlight1)
//         scene.add(pointlight2)
        
//         //Perspective camera - Objects far away from camera appear smaller
//         camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
//         camera.position.z=10

//         renderer = new THREE.WebGLRenderer()
//         renderer.setSize(window.innerWidth, window.innerHeight)
//         document.body.appendChild(renderer.domElement)
        
//         window.addEventListener('resize', onResize, false)
//         update()
//     }
//     function update()
//     {
//         //Refreshes the screen 60 times every second(60 FPS)
//         requestAnimationFrame(update)

//         //Animations
//         box.rotation.y += 0.01
//         box.rotation.x +=0.001
        
//         //Render the scene using WebGLRenderer
//         renderer.render(scene, camera)
//     }
//     //function to change camera and renderer parameters on screen resize
//     function onResize()
//     {
//         //change the aspect ratio of the camera
//         camera.aspect=window.innerWidth/window.innerHeight
//         camera.updateProjectionMatrix()
        
//         //change the size of the renderer (i.e. the span of the content on the screen)
//         renderer.setSize(window.innerWidth, window.innerHeight)
//     }
// }



import * as THREE from '../build/three.module.js';

import Stats from './jsm/libs/stats.module.js';

import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';

let camera, scene, renderer, stats;

const clock = new THREE.Clock();

let mixer;

init();
animate();

function init() {

    const container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.set( 100, 200, 300 );

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xa0a0a0 );
    scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
    hemiLight.position.set( 0, 200, 0 );
    scene.add( hemiLight );

    const dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.position.set( 0, 200, 100 );
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 180;
    dirLight.shadow.camera.bottom = - 100;
    dirLight.shadow.camera.left = - 120;
    dirLight.shadow.camera.right = 120;
    scene.add( dirLight );

    // scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

    // ground
    const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
    mesh.rotation.x = - Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add( mesh );

    const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add( grid );

    // model
    const loader = new FBXLoader();
    loader.load( 'models/fbx/Samba Dancing.fbx', function ( object ) {

        mixer = new THREE.AnimationMixer( object );

        const action = mixer.clipAction( object.animations[ 0 ] );
        action.play();

        object.traverse( function ( child ) {

            if ( child.isMesh ) {

                child.castShadow = true;
                child.receiveShadow = true;

            }

        } );

        scene.add( object );

    } );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    container.appendChild( renderer.domElement );

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.target.set( 0, 100, 0 );
    controls.update();

    window.addEventListener( 'resize', onWindowResize );

    // stats
    stats = new Stats();
    container.appendChild( stats.dom );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {

    requestAnimationFrame( animate );

    const delta = clock.getDelta();

    if ( mixer ) mixer.update( delta );

    renderer.render( scene, camera );

    stats.update();

}

