import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export function homepage_anim()
{
    var scene, camera, renderer
    var base
    init()
    return(
        <div/>
    )

    function init()
    {
        scene = new THREE.Scene()
        scene.background = new THREE.Color(0xffffff)

        buildStructure(5, 10)
        
        const light = new THREE.HemisphereLight(0xffffcd, 0xdd0000, 1)
        scene.add(light)

        camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        camera.position.set(0, 3, 15)

        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0,4,0);
        controls.update();

        window.addEventListener('resize', onResize, false)
        update()
    }
    function buildStructure(noOfBlocks, noOfLevels)
    {
        const height=0.4, width_1=3, depth_1=0.9, offset=0.1, width_2=depth_1, depth_2=noOfBlocks*(depth_1+offset)

        const geometry_1 = new THREE.BoxGeometry(width_1, height, depth_1)
        const geometry_2 = new THREE.BoxGeometry(width_2, height, depth_2)

        const material = new THREE.MeshLambertMaterial({color: new THREE.Color(0xddbbc7)})

        base = new THREE.Mesh(new THREE.BoxGeometry(width_1, height, (depth_1+offset)*noOfBlocks), new THREE.MeshLambertMaterial({color : new THREE.Color(0x200000)}))
        base.position.set(0, height/2.0, 0)

        for(let l=0, y_coordinate=height*1.5+offset;l<noOfLevels;l++)
        {
            l%2===0 && build_z(y_coordinate)
            l%2===1 && build_x(y_coordinate)
            y_coordinate+=height+offset
        }
        scene.add(base)
        function build_x(y_coordinate)
        {
            let x_coordinate=-1.1
            for(let b=0;b<3;b++)
            {
                const brick=new THREE.Mesh(geometry_2, material)
                brick.position.set(x_coordinate, y_coordinate, 0)
                base.add(brick)
                x_coordinate+=1.1
            }
        }
        function build_z(y_coordinate)
        {
            let z_coordinate=-(depth_1+offset)*(noOfBlocks-1)/2.0
            for(let b=0;b<noOfBlocks;b++)
            {
                const brick=new THREE.Mesh(geometry_1, material)
                brick.position.set(0, y_coordinate, z_coordinate)
                base.add(brick)
                z_coordinate+=offset+depth_1
            }
        }
    }
    function update()
    {
        requestAnimationFrame(update)
        renderer.render(scene, camera)
    }
    function onResize()
    {
        camera.aspect = window.innerWidth/window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    }
}

