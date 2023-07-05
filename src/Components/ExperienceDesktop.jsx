import { ContactShadows, Float, Html, PresentationControls, useGLTF } from '@react-three/drei'
import { useControls } from 'leva';
import { isIOS } from 'react-device-detect';

function ExperienceDesktop()
{

  let htmlScreen = null;
  
  setTimeout(() => {
    htmlScreen = document.querySelector('.htmlScreen');
  }, 50)

  let toggleHtmlScreenDisplayTimeout = null;
  const toggleHtmlScreenDisplay = () => {
    if (!htmlScreen) return;
    htmlScreen.style.display = 'none';

    
    if (toggleHtmlScreenDisplayTimeout) {
      clearTimeout(toggleHtmlScreenDisplayTimeout);
    }

    toggleHtmlScreenDisplayTimeout = setTimeout( () => {
      htmlScreen.style.display = 'block';
    }, 200 )
  }

  window.addEventListener('resize', toggleHtmlScreenDisplay);

  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');

  const colors = useControls('Colors', {
    Background: '#241A1A',
    AreaLight: '#FFFFFF'
  });
  const Model = useControls('Model', {
    Scale: { value: 1, min: 0, max: 2, step: 0.01 },
    PositionX: { value: 0.25, min: -2, max: 2, step: 0.01 },
    PositionY: { value: -1.2, min: -2, max: 2, step: 0.01 },
  });

  let positionY = 0;
  if (isIOS) {
    positionY = 1.38;
  } else {
    positionY = 1.53;
  }

  return <>

      {/* <Environment preset='city' /> */}

      <color attach="background" args={ [ colors.Background ] }/>

      <PresentationControls
        global
        rotation={[ 0.13, 0.1, 0 ]}
        polar={[ -0.4, 0.2 ]}
        azimuth={[ -1.3, 0.75 ]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={ 0.4 }>
          <rectAreaLight 
            width={ 2.5 }
            height={ 1.65 }
            intensity={ 65 }
            color={ colors.AreaLight }
            rotation={[ 0.1, Math.PI, 0 ]}
            position={[ 0, 0.55, -1.15 ]}
          />
          <primitive 
            object={ computer.scene }
            position-y={ Model.PositionY }
            position-x={ Model.PositionX }
            scale={ Model.Scale }
          >
            <Html
              transform
              wrapperClass='htmlScreen'
              distanceFactor={ 1.17}
              position={[ 0, positionY, -1.4 ]}
              rotation-x={[ -0.256 ]}
              >
              <iframe src='../html/ConnectionWebsiteDesktop.html' />
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

// class Experience3 extends Component {


//   htmlScreen = createRef()
//   toggleHtmlScreenDisplayTimeout = null;

//   componentDidMount() {
//     window.addEventListener('resize', this.handleResize.bind(this))
//     console.log(this.htmlScreen)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize.bind(this))
//   }

//   handleResize() {
//     this.htmlScreen.current.style.display = 'none';

//     if (this.toggleHtmlScreenDisplayTimeout) {
//       clearTimeout(this.toggleHtmlScreenDisplayTimeout);
//     }

//     this.toggleHtmlScreenDisplayTimeout = setTimeout( () => {
//       this.htmlScreen.current.style.display = 'block';
//     }, 200)
//   }

//   render() {
//     return (
//       <>
//         <h1 ref={this.htmlScreen}>Salut</h1>
//       </>
//     )
//   }
// }


// class Experience extends Component {
//   htmlScreen = createRef()
//   toggleHtmlScreenDisplayTimeout = null;

//   colors = useControls('Colors', {
//     Background: '#241A1A',
//     Screen: '#FFFFFF'
//   });

//   componentDidMount() {
//     window.addEventListener('resize', this.handleResize.bind(this))
//     console.log(this.htmlScreen)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize.bind(this))
//   }

//   handleResize() {
//     this.htmlScreen.current.style.display = 'none';

//     if (this.toggleHtmlScreenDisplayTimeout) {
//       clearTimeout(this.toggleHtmlScreenDisplayTimeout);
//     }

//     this.toggleHtmlScreenDisplayTimeout = setTimeout( () => {
//       this.htmlScreen.current.style.display = 'block';
//     }, 200)
//   }

//   render() {
//     return <>

//       <Environment preset='city' />

//       <color attach="background" args={ [ colors.Background ] }/>

//       <PresentationControls
//         global
//         rotation={[ 0.13, 0.1, 0 ]}
//         polar={[ -0.4, 0.2 ]}
//         azimuth={[ -1.3, 0.75 ]}
//         config={{ mass: 2, tension: 400 }}
//         snap={{ mass: 4, tension: 400 }}
//       >
//         <Float rotationIntensity={ 0.4 }>
//           <rectAreaLight 
//             width={ 2.5 }
//             height={ 1.65 }
//             intensity={ 65 }
//             color={ colors.Screen }
//             rotation={[ 0.1, Math.PI, 0 ]}
//             position={[ 0, 0.55, -1.15 ]}
//           />
//           <primitive 
//             object={ computer.scene }
//             position-y={ -1.2 }
//             position-x={ 0.25 }
//           >
//             <Html
//               transform
//               wrapperClass='htmlScreen'
//               distanceFactor={ 1.17}
//               position={[ 0, 1.53, -1.4 ]}
//               rotation-x={[ -0.256 ]}
//               >
//               <iframe src='/src/Website/website.html' />
//             </Html>
//           </primitive>
//         </Float>
//       </PresentationControls>

//       <ContactShadows 
//         position-y={ -1.5 }
//         opacity={ 0.5 }
//         scale={ 5 }
//         blur={ 2.1 }
//       />
//   </>
//   }
// }

export default ExperienceDesktop;