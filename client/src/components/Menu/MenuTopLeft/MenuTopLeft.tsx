import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Styles
import { TOPLEFTMENU } from './styles';
// Action
import { change_one } from '../../../actions/change_one';
// Redux
import { connect } from 'react-redux';
// Translations
import { getTranslatedText } from '../../../store/languages/Translations_function';
// Interfaces
import { IMenuTopLeft, IMenuTopLeftState } from '../../../types/menuTopLeftInterfaces';


const MenuTopLeft: React.FC<IMenuTopLeft> = ({name, change_one}) => {
  // Redux
  const generalState = useSelector((state: IMenuTopLeftState) => state.general_state);
  const image = useSelector((state: IMenuTopLeftState) => state.image);
  const dispatch = useDispatch();

  return (
    <>
      {name === 'elements' ? (
        <TOPLEFTMENU>
          {!generalState.global ? (
            <p> {getTranslatedText('Choose_element_to_add')} </p>
          ) : (
            <>
              <button
                className='btn'
                onClick={() => {
                  change_one(
                    [{
                      loadName: 'global',
                      loadValue: false,
                    },
                    {
                      loadName: 'element',
                      loadValue: null,
                    },
                    {
                      loadName: 'infoclick',
                      loadValue: true,
                    }]
                  );
                  dispatch({
                    type: 'IMAGE_CHANGE_ONE',
                    payload: {
                      loadName: 'openCloseFolders',
                      loadValue: image.openCloseFolders,
                    }
                  });
                }}
              >
                {getTranslatedText('Stop')}
              </button>
              <p> {getTranslatedText('Stop_add_mode')} </p>
            </>
          )}
        </TOPLEFTMENU>
      ) : name === 'general' || name === 'animation' ? (
        <TOPLEFTMENU>
          {generalState.edit ? (
            <p>{getTranslatedText('Leave_edit_mode')}</p>
          ) : (
            <p
              title={
                generalState.list.length === 0 ? 'First choose one element' : ''
              }
            >
              {generalState.list.length === 0 || generalState.global
                ? getTranslatedText('Choose_at_least_1_element')
                : !generalState.id
                ? getTranslatedText('Enable_button_and_click_on_choosen_element')
                : getTranslatedText('Edit_mode')}
            </p>
          )}
          <input
            type='checkbox'
            checked={generalState.edit}
            onChange={(e) => {
              change_one(
                [{
                  loadName: 'edit',
                  loadValue: generalState.edit,
                },
                {
                  loadName: 'infonotmove',
                  loadValue: true,
                },
                {
                  loadName: 'infoclick',
                  loadValue: true,
                }]
              );
            }}
            title={
              generalState.list.length === 0 ? 'First choose one element' : ''
            }
            disabled={generalState.list.length === 0 || generalState.global}
          />
        </TOPLEFTMENU>
      ) : name === 'photo' ? (
        <TOPLEFTMENU>
          <p>{getTranslatedText('Photo_title')}</p>
        </TOPLEFTMENU>
      ) : name === 'background' ? 
        <TOPLEFTMENU>
          <p>{getTranslatedText('Choose_background')}</p>
        </TOPLEFTMENU>
      : null}
    </>
  );
}

export default connect(null, { change_one })(MenuTopLeft);