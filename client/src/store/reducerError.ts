import { IErrorReducer } from '../types/reducerInterfaces/reducerErrorInterfaces';

const initialState = {
  msg_register: '',
  msg_login: '',
};

function reducerError(state = initialState, action: IErrorReducer ) {
  const { type, payload } = action;

  switch (type) {
    case 'ERRORS_REGISTER':
      return {
        ...state,
        msg_register: payload.msg,
      };
    case 'CLEAR_ERRORS_REGISTER':
      return {
        ...state,
        msg_register: '',
      };
    case 'ERRORS_LOGIN':
      return {
        ...state,
        msg_login: payload.msg,
      };
    case 'CLEAR_ERRORS_LOGIN':
      return {
        ...state,
        msg_login: '',
      };
    default:
      return state;
  }
}

export default reducerError;
