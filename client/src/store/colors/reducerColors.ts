import { IColors } from '../../types/reducerInterfaces/reducerColorsInterface';

const initialState = {
    theme_one: {
        colorBright: '#d65555',
        colorDark: '#1f2d2a',
        colorElement: '#80baae',
        colorElementHover: 'rgb(99,165,152)',
        colorBgBtn: '#1f2d2a',
        colorBtn: '#d65555',
        colorBgBtn2: '#d65555',
        colorBtn2: '#1f2d2a',
        background: '#efefef',
    },
    theme_two: {
        colorBright: '#73FFAB',
        colorDark: '#FF8CE7',
        colorElement: '#FFC666',
        colorElementHover: 'rgb(99,165,152)',
        colorBgBtn: '#C980FF',
        colorBtn: '#000',
        colorBgBtn2: '#73FFAB',
        colorBtn2: '#000',
        background: '#efefef',
    },
}

function reducerColors(state = initialState, action: IColors) {
  switch (action.type) {
    case 'SET_COLORS':
      const { payload } = action;
      
      if (localStorage.getItem('colors') !== payload) {
        localStorage.setItem('colors', payload);
      }
      window.location.reload();
      return {
        state,
      };

    default:
      return state;
  }
}

export default reducerColors;
