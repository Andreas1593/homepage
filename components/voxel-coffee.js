import { useCallback , useState, useEffect, useRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelCoffee = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [_camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(0, 1.2, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            7,
            20 * Math.cos(0.2 * Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer
        if (container && renderer) {
          const scW = container.clientWidth
          const scH = container.clientHeight
    
          renderer.setSize(scW, scH)
        }
      }, [renderer])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const { current: container } = refContainer
        if (container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            // Orthographic maybe later
            // 640 -> 240
            // 8 -> 6
            // const scale = scH * 0.005 + 4.8
            const camera = new THREE.PerspectiveCamera()
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
            scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            controls.enablePan = false
            setControls(controls)

            loadGLTFModel(scene, '/coffee.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate)

                frame = frame <= 100 ? frame + 1 : frame
                if(frame <= 100) {
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

                    camera.position.y = 7
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                    controls.update()
                }

                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
          window.removeEventListener('resize', handleWindowResize, false)
        }
      }, [renderer, handleWindowResize])
    
    return (
        <Box
            ref={refContainer}
            className="voxel-coffee"
            m="auto"
            at={['-20px', '-60px', '-120px']}
            mb={['-100px', '-175px', '-255px']}
            mt={['-95px', '-180px', '-270px']}
            w={[280, 480, 680]}
            h={[280, 480, 680]}
            position="relative"
        >
            {loading && (
                <Spinner
                    size="xl"
                    position="absolute"
                    left="50%"
                    top="50%"
                    ml="-20px"
                    mt="-5px"
                />
            )}
        </Box>
    )
}

export default VoxelCoffee