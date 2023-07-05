import { ContactShadows, Float, Html, PresentationControls, useGLTF } from "@react-three/drei"
import { folder, useControls } from "leva";

function ExperienceMobile () {

    const mobile = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf');

    const colors = useControls('Colors', {
        Background: '#241A1A',
    }, {collapsed: true});
    const Model = useControls('Model', {
    Scale: { value: 0.84, min: 0, max: 2, step: 0.01 },
    PositionX: { value: 0, min: -2, max: 2, step: 0.01 },
    PositionY: { value: -1.2, min: -2, max: 2, step: 0.01 },
    }, {collapsed: true});
    const Polar = useControls('Polar', {
    Value1: { value: -0.4, min: -2, max: 2, step: 0.01 },
    Value2: { value: 0.2, min: -2, max: 2, step: 0.01 },
    }, {collapsed: true});
    const Azimuth = useControls('Azimuth', {
    Value1: { value: -1.3, min: -2, max: 2, step: 0.01 },
    Value2: { value: -0.75, min: -2, max: 2, step: 0.01 },
    }, {collapsed: true})
    const AreaLight = useControls('AreaLight', {
    Width: { value: 2.5, min: -10, max: 10, step: 0.01 },
    Height: { value: 4.43, min: -10, max: 10, step: 0.01 },
    Intensity: { value: 8.57, min: 0, max: 100, step: 0.01 },
    Color: '#FFFFFF',
        'Rotation': folder({
            RotationX: { value: 0.45, min: -10, max: 10, step: 0.01 },
            RotationY: { value: 2.61, min: -10, max: 10, step: 0.01 },
            RotationZ: { value: -3.1, min: -10, max: 10, step: 0.01 },
        }),
        'Position': folder({
            PositionX: { value: 3.52, min: -10, max: 10, step: 0.01 },
            PositionY: { value: 0.60, min: -10, max: 10, step: 0.01 },
            PositionZ: { value: 0.94, min: -10, max: 10, step: 0.01 },
        }),
    }, {collapsed: true})
    const HTML = useControls('HTML', {
        Distance: { value: 1.17, min: -10, max: 10, step: 0.01 },
        'Position': folder({ 
            PositionX: { value: 0.165, min: -10, max: 10, step: 0.01 },
            PositionY: { value: 1.33, min: -10, max: 10, step: 0.01 },
            PositionZ: { value: 0.08, min: -10, max: 10, step: 0.01 }
        }),
        'Rotation': folder({ 
            RotationX: { value: 0, min: -10, max: 10, step: 0.01 },
            RotationY: { value: 2.61, min: -10, max: 10, step: 0.01 },
            RotationZ: { value: -3.1, min: -10, max: 10, step: 0.01 },
        }),
        Width: { value: 515 },
        Height: { value: 1100 },
    }, {collapsed: true})

    return <>

      {/* <Environment preset='city' /> */}

      <color attach="background" args={ [ colors.Background ] }/>

      <PresentationControls
        global
        rotation={[ 0.13, 0.5, 0 ]}
        polar={[ Polar.Value1, Polar.Value2 ]}
        azimuth={[ Azimuth.Value1, Azimuth.Value2 ]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={ 0.4 }>
          <rectAreaLight
            width={ AreaLight.Width }
            height={ AreaLight.Height }
            intensity={ AreaLight.Intensity }
            color={ AreaLight.Color }
            rotation={[ AreaLight.RotationX, AreaLight.RotationY, AreaLight.RotationZ ]}
            position={[ AreaLight.PositionX, AreaLight.PositionY, AreaLight.PositionZ ]}
          />
          <primitive
            object={ mobile.scene }
            position-y={ Model.PositionY }
            position-x={ Model.PositionX }
            scale={ Model.Scale }
          >
            <Html
                transform
                wrapperClass='htmlScreen'
                distanceFactor={ HTML.Distance}
                position={[HTML.PositionX, HTML.PositionY, HTML.PositionZ]}
              >
              <iframe src='/src/html/ConnectionWebsite.html' style={{width: HTML.Width, height: HTML.Height, borderRadius: 60+'px'}} />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      <ContactShadows 
        position-y={ -1.5 }
        opacity={ 0.5 }
        scale={ 5 }
        blur={ 2.1 }
      />
  </>

}

export default ExperienceMobile