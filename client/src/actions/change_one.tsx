interface IElms {
  loadLine?: string;
  loadValue?: string | boolean | any;
  loadName?: string;
}

export const change_one = (elms: IElms[]) => async (
  dispatch: Function,
  getState: Function
) => {
  try {
    let values = elms;
    let copy = getState().general_state;

    let new_values = values.map(val => {
      if (val.loadLine) {
        copy[val.loadName] = val.loadValue[0].id;
        return copy;
      }

      if (val.loadName === 'openApp' || val.loadName === 'edit') {
        copy[val.loadName] = !val.loadValue;
        return copy;
      } else {
        copy[val.loadName] = val.loadValue;
        return copy;
      }
    });

    new_values.map(el => (
      dispatch({ type: 'CHANGE_ONE', payload: el })
    ))

  } catch (err) {
    console.log('CHANGE_ONE function error', err);
  }
};
