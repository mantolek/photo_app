import React from 'react';
// Actions
import { logout } from '../../../actions/auth';
import { change_one } from '../../../actions/change_one';
// Styles
import { MENU_CONTAINER } from './styles';
// Redux
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
// Translations
import { getTranslatedText } from '../../../store/languages/Translations_function';
// Flags
import polish from '../../../img/flags/polish.png';
import english from '../../../img/flags/english.png';
// Interfaces
import { IMenuTopRight, IMenuTopRightState } from '../../../types/menuTopRightInterfaces';

const MenuTopRight: React.FC<IMenuTopRight> = props => {
  const auth = useSelector((state: IMenuTopRightState) => state.auth);
  const generalState = useSelector(
    (state: IMenuTopRightState) => state.general_state
  );
  const dispatch = useDispatch();

  return (
    <MENU_CONTAINER style={{ display: !auth.isAuthenticated && 'none' }}>
      {generalState.id ? (
        <button
          className="btn"
          onClick={() => {
            let newList = generalState.list.filter(
              el => el.id !== generalState.id
            );

            props.change_one([
              {
                loadName: 'id',
                loadValue: null,
              },
              {
                loadName: 'list',
                loadValue: newList,
              },
            ]);
          }}
        >
          {getTranslatedText('Delete_element')}?
        </button>
      ) : (
        <div></div>
      )}
      <p>
        {getTranslatedText('Hey')}, {auth.user && auth.user.name}
      </p>

      <div className="right-top-box">
        <div
          className="colors-button"
          onClick={e => {
            let event = e.target as HTMLInputElement
            event.nextElementSibling.classList.toggle('activeColors');
          }}
          title="Change App's Collors"
        ></div>

        <div className="colors-box">
          <h5>Change App's Colors</h5>
          <ul>
            <li
              onClick={() => dispatch({ type: 'SET_COLORS', payload: 'one' })}
            >
              Colors #281
            </li>
            <li
              onClick={() => dispatch({ type: 'SET_COLORS', payload: 'two' })}
            >
              Colors #117
            </li>
          </ul>
        </div>

        <div className="flags_box">
          <img
            src={english}
            className="flags"
            onClick={() => dispatch({ type: 'SET_LG', payload: 'EN' })}
            alt="english"
          />
          <img
            src={polish}
            className="flags"
            onClick={() => dispatch({ type: 'SET_LG', payload: 'PL' })}
            alt="polish"
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            let w = localStorage.getItem('token');
            props.logout({ token: w });

            props.change_one([
              {
                loadName: 'hideMainMenu',
                loadValue: false,
              },
              {
                loadName: 'page',
                loadValue: 'openApp',
              },
              {
                loadName: 'openApp',
                loadValue: false,
              },
            ]);
          }}
        >
          {getTranslatedText('Logout')}
        </button>
      </div>
    </MENU_CONTAINER>
  );
};

export default connect(null, { logout, change_one })(MenuTopRight);
