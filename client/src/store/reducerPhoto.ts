import { IPhotoReducer } from '../types/reducerInterfaces/reducerPhotoInterfaces';

const initialState = {
  photoInfo: '',
  option: 'all',
};

function reducerPhoto(state = initialState, action: IPhotoReducer ) {
  const { type, payload } = action;

  switch (type) {
    case 'SAVE_PHOTO':
      return {
        ...state,
        photoInfo: 'Photo Saved',
      };

    case 'GET_PHOTOS':
      return {
        ...state,
        photos: [...payload],
        option: 'all'
      };

    case 'GET_MY_PHOTOS':
      return {
        ...state,
        photos: [...payload],
        option: 'mine'
      }
    
    case 'OVERWRITE_PHOTO':

      return {
        ...state,
      }

    default:
      return state;
  }
}

export default reducerPhoto;
