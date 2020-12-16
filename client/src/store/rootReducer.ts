import { combineReducers } from 'redux' //do laczenia storow
import reducerGeneralState from './reducerGeneralState';
import reducerAuth from './reducerAuth';
import reducerError from './reducerError';
import reducerPhoto from './reducerPhoto';
import reducerImages from './images_src/reducerImages';
import reducerLgs from './languages/reducerLgs';
import reducerColors from './colors/reducerColors';

const rootReducer = combineReducers({
    general_state: reducerGeneralState,  //actorsReducers pod nazwa actors
    auth: reducerAuth,
    error: reducerError,
    photo: reducerPhoto,
    image: reducerImages,
    lg: reducerLgs,
    colors: reducerColors,
})

export default rootReducer