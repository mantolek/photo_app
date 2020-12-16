import { IGeneral, initialStateGeneral } from '../types/reducerInterfaces/reducerGeneralInterfaces';

const initialState: initialStateGeneral = {
  // Element styling
  id: null,
  idx: null, // currently moved el
  filters: [
    'blur',
    'brightness',
    'contrast',
    'grayscale',
    'hue-rotate',
    'invert',
    'saturate',
    'sepia',
  ],

  openApp: false, // True === Open Application and show menu
  element: null, // Choosen element to create
  global: false, // True === Allow to create elements
  page: 'openApp',
  edit: false, //elements can be edited

  infomove: true,
  infonotmove: false,

  randomNumber_1: Math.floor(Math.random() * 100) + 1,
  randomNumber_2: Math.floor(Math.random() * 100) + 1,

  photo_current_id: '',
  list: [], // List of created elements

  // List of options to change
  options: [
    {
      name: 'height',
      value: 50,
      min: 1,
      max: 500,
    },
    {
      name: 'width',
      value: 50,
      min: 1,
      max: 500,
    },
    {
      name: 'rotate',
      value: 0,
      min: 0,
      max: 360,
    },
    {
      name: 'opacity',
      value: 1,
      min: 0,
      max: 1,
    },
    {
      name: 'filter',
      value: '',
    },
    {
      name: 'clippath',
      value: '',
    },
    {
      name: 'borderRadius',
      value: 0,
      min: 0,
      max: 50,
    },
    {
      name: 'zIndex',
      value: 0,
    },
  ],
  clippath: '',
  clippaths: [
    {
      name: 'triangle',
      value: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    },
    {
      name: 'trapezoid',
      value: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
    },
    {
      name: 'parallelogram',
      value: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
    },
    {
      name: 'rhombus',
      value: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    },
    {
      name: 'pentagon',
      value: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
    },
    {
      name: 'hexagon',
      value: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    },
    {
      name: 'heptagon',
      value:
        'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
    },
    {
      name: 'octagon',
      value:
        'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    },
    {
      name: 'nonagon',
      value:
        'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',
    },
    {
      name: 'decagon',
      value:
        'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
    },
    {
      name: 'bevel',
      value:
        'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
    },
    {
      name: 'rabbet',
      value:
        'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',
    },
    {
      name: 'star',
      value:
        'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
    },
    {
      name: 'close',
      value:
        'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
    },
    {
      name: 'frame',
      value:
        'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)',
    },
  ],
  // Animations
  animations: [
    {
      name: 'heightA',
      subName: 'time',
    },
    {
      name: 'widthA',
      subName: 'time',
    },
  ],
  // Animations timing functions - cubic bezier
  animTimFunc: [
    {
      name: 'linear',
      value: 'linear',
    },
    {
      name: 'ease',
      value: 'ease',
    },
    {
      name: 'ease-in',
      value: 'ease-in',
    },
    {
      name: 'ease-out',
      value: 'ease-out',
    },
    {
      name: 'cubic-bezier',
      value: 'cubic-bezier',
    },
  ],
  // Menu left side
  menuLeft: [
    {
      name: 'elements',
    },
    {
      name: 'general',
    },
    {
      name: 'animation',
    },
    {
      name: 'background',
    },
    {
      name: 'photo',
    },
  ],
};

function reducerGeneralState(state = initialState, action: IGeneral) {
  switch (action.type) {
    case 'SET_NEW_VALUES': // Edit mode
      const {
        loadName,
        loadSubName,
        loadValue,
        id,
        loadType,
        loadFilters,
        loadFilterName,
      } = action.payload;

      let w: any = state.list.filter(x => x.id === id);
      //If animation is to be adjusted
      if (loadName === 'heightA' || loadName === 'widthA') {
        // If checkbox : set 'play' of animation to true/false
        if (
          (loadSubName !== null || loadSubName === undefined) &&
          loadType === 'checkbox'
        ) {
          w[0][loadName] = [
            {
              ...w[0][loadName][0],
              [loadSubName]: !loadValue,
            },
          ];
        } else {
          // If animation-timing-function is cubic-bezier
          if (w[0][loadName][0].timing_func_name === 'cubic-bezier') {
            w[0][loadName][0][loadSubName] = loadValue;

            // ***
            // After choosing cubic-bezier other options were working on 2nd click. Now they work on 1st click
            if (w[0][loadName][0].timing_func_name === 'cubic-bezier') {
              let value = `${w[0][loadName][0].timing_func_name}(${w[0][loadName][0].timing_func_value_1},${w[0][loadName][0].timing_func_value_2},${w[0][loadName][0].timing_func_value_3},${w[0][loadName][0].timing_func_value_4})
              `;
              w[0][loadName][0].timing_func_final = value;
            } else {
              w[0][loadName][0].timing_func_final = loadValue;
            }
            // ***
          } else {
            if (loadSubName === 'time') {
              // Set time of animation
              w[0][loadName][0].time = loadValue;
            } else {
              // Other names of animations - NOT cubic-bezier
              w[0][loadName][0].timing_func_final = loadValue;
            }
          }

          w[0][loadName] = [
            {
              ...w[0][loadName][0],
              [loadSubName]: loadValue,
            },
          ];
        }

        return {
          ...state,
        };
        // If it is NOT an animation
      } else {
        if (loadFilters) {
          // Filters
          let value = '';
          switch (w[0][loadName][0].name) {
            case 'brightness':
              value = `brightness(${loadValue})`;
              break;
            case 'blur':
              value = `blur(${loadValue}px)`;
              break;
            case 'contrast':
              value = `contrast(${loadValue}%)`;
              break;
            case 'grayscale':
              value = `grayscale(${loadValue}%)`;
              break;
            case 'hue-rotate':
              value = `hue-rotate(${loadValue}deg)`;
              break;
            case 'invert':
              value = `invert(${loadValue}%)`;
              break;
            case 'saturate':
              value = `saturate(${loadValue})`;
              break;
            case 'sepia':
              value = `sepia(${loadValue}%)`;
              break;
            default:
          }

          w[0][loadName][0].value = loadValue;
          w[0][loadName][0].final = value;
        } else {
          if (loadFilterName) {
            w[0][loadName][0].name = loadValue;
          } else {
            // Every other individual state of an element
            w[0][loadName] = loadValue;
          }
        }

        return {
          // general state
          ...state,
        };
      }

    case 'CREATE_NEW_EL': // New element      
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case 'CHANGE_ONE':
      return {
        ...state,
        ...action.payload,
      };

    case 'RESET':
      return {
        ...state,
        ...action.payload,
      }

    default:
  }
  return state;
}

export default reducerGeneralState;
