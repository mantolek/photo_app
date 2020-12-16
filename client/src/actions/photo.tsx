import axios from 'axios';

/*
 * Setup config/headers and token
 */
export const config = (getState: Function, t: string) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
      'x-auth-token': ''
    },
  };
  if (t) {
    const token = getState().auth.token; // Get token from reducerAuth
    if (token) {
      config.headers['x-auth-token'] = token;
    }
  }

  return config;
};

export const savePhoto = ({ src }: {src: string}) => async (dispatch: Function, getState: Function) => {
  const body = JSON.stringify({
    src,
    user: getState().auth.user,
    download_list: getState().general_state.list,
  });

  try {
    await axios.post(
      'http://localhost:5000/photo/savePhoto',
      body,
      config(getState, 'token')
    );

    dispatch({ type: 'SAVE_PHOTO' });
    await dispatch(getPhotos()) // reload photos
  } catch (err) {
    console.log('Save photo error', err)
  }
};

export const getPhotos = () => async (dispatch: Function, getState: Function) => {
  try {
    const res = await axios.get(
      'http://localhost:5000/photo/getPhotos',
      config(getState, 'token')
    );
    dispatch({ type: 'GET_PHOTOS', payload: res.data });
    
  } catch (err) {
      console.log('Get all photos error', err)
  }
};

export const getMyPhotos = () => async (dispatch: Function, getState: Function) => {

  const body = JSON.stringify({
    name: getState().auth.user.name,
  });
  try {
    const res = await axios.post(
      'http://localhost:5000/photo/getMyPhotos',
      body,
      config(getState, 'token')
    );
    dispatch({ type: 'GET_MY_PHOTOS', payload: res.data });

  } catch(err) {
    console.log('Get user photos error', err)
  }
}

export const overwritePhoto = ({ id, src }: {id: string, src: string}) => async (dispatch: Function, getState: Function) => {
  const body = JSON.stringify({
    id:id,
    list: getState().general_state.list,
    src: src,
  });
 
  try {
    await axios.put(
      'http://localhost:5000/photo/overwritePhoto',
      body,
      config(getState, 'token')
    );
      dispatch({ type: 'OVERWRITE_PHOTO' });
      await dispatch(getPhotos()) // reload photos 
  } catch (err) {
      console.log('Overwrite photo error', err)
  }
}