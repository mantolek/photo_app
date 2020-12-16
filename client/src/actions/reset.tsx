export const reset = () => async (dispatch: Function, getState: Function) => {
  try {
    let copy = getState().general_state;
    copy.id = null;
    copy.idx = null;
    copy.list = [];
    copy.edit = false;
    copy.element = null;
    let copy2 = getState().image;
    copy2.background = '';
    copy2.openCloseFolders = false;
    copy2.folderOpen = '';

    dispatch({ type: 'RESET', payload: copy });
  } catch (err) {
    console.log("Reset photo error", err)
  }
};