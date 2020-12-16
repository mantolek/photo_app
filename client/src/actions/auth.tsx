import axios from 'axios';

/*
 * Setup config/headers and token
 */
export const config = (getState?: Function, t?: string) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
      'x-auth-token': ''
    }
  };
  if(t){
    const token = getState().auth.token; // Get token from reducerAuth
    if (token) { config.headers['x-auth-token'] = token; }
  }

  return config;
};

// Check token & load user
export const loadUser = () => async (dispatch: Function, getState: Function) => {

  try {
    const res = await axios.get('http://localhost:5000/user/auth', config(getState,'token'));

    res.data.token && dispatch({ type: 'USER_LOADED', payload: res.data })

  } catch(err) {
    dispatch({ type: 'ERRORS_LOGIN', payload: err.response.data });
    dispatch({ type: 'AUTH_ERROR' })
  }
};

// Register User
export const register = ({ name, password }: {name: string, password: string}) => async (dispatch: Function, getState: Function) => {
  const body = JSON.stringify({ name, password });

  try {
    const res = await axios.post(
      'http://localhost:5000/user/register',
      body,
      config()
    );

    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res.data, //token
    });

  } catch (err) {
    dispatch({ type: 'ERRORS_REGISTER', payload: err.response.data });
    dispatch({ type: 'REGISTER_FAIL' });
  }
};

// Login User
export const login = ({ name, password }: {name: string, password: string}) => async (dispatch: Function, getState: Function) => {
  const body = JSON.stringify({ name, password });

  try {
    const res = await axios.post(
      'http://localhost:5000/user/login',
      body,
      config()
    );
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data, //token
    });

    //   dispatch(loadUser()); //pobieram dane uzytkownika
  } catch (err) {
    dispatch({ type: 'ERRORS_LOGIN', payload: err.response.data });
    dispatch({ type: 'LOGIN_FAIL' });
  }
};

/*
 * LOGOUT 
 */
export const logout = ({token}: {token: string}) => async (dispatch: Function, getState: Function) => {
  const body = JSON.stringify({ token });
  try {
    await axios.put('http://localhost:5000/user/logout', body, config(getState, 'token')); 

    // Reset everything
    let copy = getState().general_state;
    copy.id = null;
    copy.idx = null;
    copy.list = [];
    copy.edit = false;
    copy.openApp = false;
    copy.edit = false;
    copy.element = null;
    copy.global = false;
    let copy2 = getState().image;
    copy2.background = '';
    copy2.openCloseFolders = false;
    copy2.folderOpen = '';
    
    dispatch({ type: 'LOGOUT_SUCCESS' });

  } catch (err) {
    console.log("logout error", err)
  }
};
