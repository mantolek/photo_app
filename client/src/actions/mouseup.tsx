import { change_one } from './change_one';

// Make dragged elements stop if mouseup outside of the zone
export const mouseup = () => async (dispatch: Function, getState: Function) => {
  try {
    document.body.addEventListener('mouseup', function(e) {
      let event = e.target as HTMLInputElement;
      if (getState().general_state.idx && event.id !== 'photo') {
        dispatch(change_one([{
          loadName: 'idx',
          loadValue: null
        }]))
      }
    });
  } catch (err) {
    console.log('Mouseup error', err);
  }
};
