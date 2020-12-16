import React from 'react';
//Elements
import GeneralOptions from './GeneralOptions/GeneralOptions';
import Animations from './Animations/Animations';
import MenuTopLeft from '../Menu/MenuTopLeft/MenuTopLeft';
import MenuLeftSide from '../Menu/MenuLeftSide/MenuLeftSide';
import Background from './Background/Background';
import Photo from './Photo/Photo';
import ElementsToAdd from './ElementToAdd/ElementsToAdd';
//Styling
import {
  CONSOLE_WRAPPER,
  MENU,
  OPEN_APP,
  ELEMENTS,
  GENERAL_OPTIONS,
  BACKGROUND,
  ANIMATION_OPTIONS,
  PHOTO,
  PAGE_CONTAINER,
} from './styles';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { reset } from '../../actions/reset';
import { change_one } from '../../actions/change_one';
// Popup
import { popup } from '../../popup/Popup';
// Translation
import { getTranslatedText } from '../../store/languages/Translations_function';
// Interfaces
import { IConsole, IConsoleState } from '../../types/consoleInterfaces';

const Console: React.FC<IConsole> = props => {
  const generalState = useSelector(
    (state: IConsoleState) => state.general_state
  );
  const auth = useSelector((state: IConsoleState) => state.auth);
  const image = useSelector((state: IConsoleState) => state.image);
  const dispatch = useDispatch();

  return (
    <CONSOLE_WRAPPER style={{ visibility: !auth.isAuthenticated ? 'hidden' : 'visible' }}>
      {/* INITIAL - OPEN APP */}
      {generalState.page === 'openApp' && (
        <OPEN_APP>
          <label>
            {getTranslatedText('Open_App')}
            <div className="count_box">
              <div>
                <p>{generalState.randomNumber_1}</p> +
                <p>{generalState.randomNumber_2}</p> =
                <input
                  type="text"
                  className="count_input"
                  onChange={e => {
                    if (
                      +e.target.value === +(generalState.randomNumber_1 + generalState.randomNumber_2)
                    ) {
                      e.target.parentElement.nextElementSibling.innerHTML =
                        'Beautiful';
                      setTimeout(() => {
                        return props.change_one([
                          {
                            loadName: 'openApp',
                            loadValue: generalState.openApp,
                          },
                          {
                            loadName: 'page',
                            loadValue: 'elements',
                          },
                        ]);
                      }, 1000);
                    }
                  }}
                />
              </div>
              <p className="beautiful"></p>
            </div>
          </label>
        </OPEN_APP>
      )}

      {/* MENU LEFT SIDE */}
      <MENU display={generalState.openApp ? 1 : 0}>
        {generalState.menuLeft.map(el => {
          return <MenuLeftSide name={el.name} key={el.name} />;
        })}
        <button
          className="btn-reset btn"
          onClick={async () => {
            let result = await popup(
              getTranslatedText('Do_you_want_to_start_from_the_beginning')
            );
            if (result) {
              props.reset();
            }
          }}
        >
          {getTranslatedText('Reset')}
        </button>
      </MENU>

      <PAGE_CONTAINER>
        <MenuTopLeft name={generalState.page} />

        {/* ELEMENTS TO CHOOSE */}
        {generalState.page === 'elements' && (
          <ELEMENTS>
            {/* FOLDERS */}
            <span
              className="title-folder"
              onClick={() => {
                return (
                  dispatch({
                    type: 'IMAGE_CHANGE_ONE',
                    payload: {
                      loadName: 'folderOpen',
                      loadValue: '',
                    },
                  }),
                  dispatch({
                    type: 'IMAGE_CHANGE_ONE',
                    payload: {
                      loadName: 'openCloseFolders',
                      loadValue: image.openCloseFolders,
                    },
                  })
                );
              }}
            >
              {getTranslatedText(image.folders[0].name)}
            </span>
            {image.openCloseFolders &&
              image.folders.map((el, index) => (
                <ElementsToAdd ch={el.children} key={index + 100} />
              ))}

            {/* CHOOSEN ELEMENT */}
            <div className="elements-choosen-element">
              {generalState.element !== null ? (
                <img src={generalState.element} alt="one" />
              ) : null}
            </div>
          </ELEMENTS>
        )}

        {/* GENERAL OPTIONS */}
        {generalState.page === 'general' && (
          <GENERAL_OPTIONS>
            <div className="general-wrapper">
              {generalState.options.map((el, i) => {
                return (
                  <GeneralOptions
                    key={i + 10}
                    name={el.name}
                    min={el.min}
                    max={el.max}
                  />
                );
              })}
            </div>
          </GENERAL_OPTIONS>
        )}

        {generalState.page === 'background' && (
          <BACKGROUND>
            <div className="general-wrapper">
              <div className="bg-box">
                {image.backgrounds.map(el => {
                  return <Background src={el.src} alt={el.alt} key={el.src} />;
                })}
              </div>
            </div>
          </BACKGROUND>
        )}

        {/* ANIMATIONS */}
        {generalState.page === 'animation' && (
          <ANIMATION_OPTIONS>
            <div className="general-wrapper">
              {generalState.animations.map((el, i) => {
                return (
                  <Animations
                    key={i}
                    name={el.name}
                  />
                );
              })}
            </div>
          </ANIMATION_OPTIONS>
        )}

        {/* PHOTO */}
        {generalState.page === 'photo' && (
          <PHOTO>
            <Photo />
          </PHOTO>
        )}
      </PAGE_CONTAINER>
    </CONSOLE_WRAPPER>
  );
};

export default connect(null, { reset, change_one })(Console);
