import { ILgs } from '../../types/reducerInterfaces/reducersLanguagesInterfaces';

const initialState = {}

function reducerLgs(state = initialState, action: ILgs) {
  switch (action.type) {
    case 'SET_LG':
      const { payload } = action;
      if (localStorage.getItem('selectedLanguage') !== payload) {
        localStorage.setItem('selectedLanguage', payload);
      }
      window.location.reload();
      return {
        state,
      };

    default:
      return state;
  }
}

export default reducerLgs;
