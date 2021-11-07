import * as THREE from 'three'
export function homepage_anim()
{
    var scene, camera, renderer
    var light, box
    
    init()
    return(
        <div />
    )
    
    //Initializing all the necessary components
    function init()
    {
        //The basic components necessary are SCENE, CAMERA, RENDERER
        scene = new THREE.Scene()
        scene.background = new THREE.Color(0x000080)

        //Any object/mesh you add to a scene requires a geometry and a material
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshStandardMaterial({color : new THREE.Color(0xaaaaaa), metalness : 0.7, roughness : 0.2})
        box = new THREE.Mesh(geometry, material)
        box.position.set(0, 0, 5)


        light = new THREE.DirectionalLight(new THREE.Color(0xffffff), 0.8)
        light.position.set(0, 1, 3)

        const pointlight1 = new THREE.PointLight(new THREE.Color(0xdc143c), 1, 100)
        pointlight1.position.set(-0.4, 0, 6)

        const pointlight2 = new THREE.PointLight(new THREE.Color(0x5fd85f), 1, 100)        
        pointlight2.position.set(0.4, 0, 6)

        scene.add(box)
        scene.add(light)
        scene.add(pointlight1)
        scene.add(pointlight2)
        
        //Perspective camera - Objects far away from camera appear smaller
        camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        camera.position.z=10

        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        
        window.addEventListener('resize', onResize, false)
        update()
    }
    function update()
    {
        //Refreshes the screen 60 times every second(60 FPS)
        requestAnimationFrame(update)

        //Animations
        box.rotation.y += 0.01
        box.rotation.x +=0.001
        
        //Render the scene using WebGLRenderer
        renderer.render(scene, camera)
    }
    //function to change camera and renderer parameters on screen resize
    function onResize()
    {
        //change the aspect ratio of the camera
        camera.aspect=window.innerWidth/window.innerHeight
        camera.updateProjectionMatrix()
        
        //change the size of the renderer (i.e. the span of the content on the screen)
        renderer.setSize(window.innerWidth, window.innerHeight)
    }
}