import { IAuthReducer } from '../types/reducerInterfaces/reducerAuthInterfaces';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: {}, //null
};

function reducerAuth(state = initialState, action: IAuthReducer) {
  const { type, payload } = action;

  switch (type) {
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        token: payload.token,
      };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
      };
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
    case 'LOGOUT_SUCCESS':
    case 'REGISTER_FAIL':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default reducerAuth;
