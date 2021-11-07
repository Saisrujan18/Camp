import * as THREE from 'three'
import earth_src from "../static/textures/earth.jpg"
import moon_src from "../static/textures/moon.jpg"
export function homepage_anim()
{
    var scene, camera, renderer
    var earth, moon, light
    init()

    return(
        <div/>
    )

    function init()
    {
        scene = new THREE.Scene()
        scene.background = new THREE.Color(0x000010)

        
        const earth_geometry = new THREE.SphereGeometry(1, 30, 20)
        const earth_texture = new THREE.TextureLoader().load(earth_src)
        const earth_material = new THREE.MeshStandardMaterial({map: earth_texture})
        
        const moon_geometry = new THREE.SphereGeometry(0.28, 30, 20)
        const moon_texture = new THREE.TextureLoader().load(moon_src)
        const moon_material = new THREE.MeshStandardMaterial({map: moon_texture})

        earth = new THREE.Mesh(earth_geometry, earth_material)
        moon = new THREE.Mesh(moon_geometry, moon_material)
        earth.position.set(0, 0, 6)
        moon.position.set(0, 0, 4)
        earth.add(moon)

        light = new THREE.DirectionalLight(new THREE.Color(0xffffff), 1)
        light.position.set(0, 20, 20)
        
        scene.add(earth)
        scene.add(light)

        camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        camera.position.set(0, 2, 15)

        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)

        window.addEventListener('resize', onResize, false)
        update()
    }
    function update()
    {
        requestAnimationFrame(update)
        earth.rotation.y += 0.01
        renderer.render(scene, camera)
    }
    function onResize()
    {
        camera.aspect=window.innerWidth/window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    }
}
