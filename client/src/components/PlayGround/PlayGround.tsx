import React, { useState, MouseEvent } from 'react';
// Styling
import styled, { keyframes } from 'styled-components';
import { CONTAINER, WRAPPER, CURSOR } from './styles';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Id uuid
import { uuid } from 'uuidv4';
// Components
import NewElement from './NewElement/NewElement';
import MenuTopRight from '../Menu/MenuTopRight/MenuTopRight';
// Translations
import { getTranslatedText } from '../../store/languages/Translations_function';
// Actions
import { change_one } from '../../actions/change_one';
// Redux
import { connect } from 'react-redux';
// Hello gif
import hello from '../../img/bg/hello.gif';
// Interfaces
import { IPlayGround, IPlayGroundState } from '../../types/playGroundInterfaces';


const PlayGround: React.FC<IPlayGround> = (props) => {
  // Redux
  const generalState = useSelector((state: IPlayGroundState) => state.general_state);
  const auth = useSelector((state: IPlayGroundState) => state.auth);
  const image = useSelector((state: IPlayGroundState) => state.image);
  const dispatch = useDispatch();

  // Current position of cursor
  const [cursorLeft, setCursorLeft] = useState(null);
  const [cursorTop, setCursorTop] = useState(null);

  /* Create new element */
  const createNewElement = (e: any) => {
    let left = e.clientX - e.target.offsetLeft;
    let top = e.clientY - e.target.offsetTop;

    let el = new NewElement({
      id: uuid(),
      left,
      top,
      height: 100,
      width: 100,
      opacity: 1,
      element: generalState.element,
      rotate: 0,
      filter: [
        {
          name: '',
          value: '',
          final: '',
        },
      ],
      clippath: '',
      borderRadius: 0,
      zIndex: 0,

      heightA: [
        {
          play: false,
          time: 1,
          timing_func_name: 'linear',
          timing_func_value_1: '1',
          timing_func_value_2: '0',
          timing_func_value_3: '1',
          timing_func_value_4: '0',
          timing_func_final: 'linear',
        },
      ],
      widthA: [
        {
          play: false,
          time: 1,
          timing_func_name: 'linear',
          timing_func_value_1: '1',
          timing_func_value_2: '0',
          timing_func_value_3: '1',
          timing_func_value_4: '0',
          timing_func_final: 'linear',
        },
      ],
    });
    dispatch({ type: 'CREATE_NEW_EL', payload: el.state });
  };

  /* Update created element */
  const updateElement = (id: string, remove: boolean) => {
    let el = generalState.list.filter(x => x.id === id);

    if (remove) {
      props.change_one([
        {
          loadLine: 'line',
          loadName: 'id',
          loadValue: null,
        },
      ]);
      return;
    }

    if (el.length !== 0) {
      props.change_one([
        {
          loadLine: 'line',
          loadName: 'id',
          loadValue: el,
        },
      ]);
    }
  };

  const setCursorCordinates = (e: any) => {
    setCursorLeft(e.clientX - e.target.offsetLeft);
    setCursorTop(e.clientY - e.target.offsetTop);

    // OnMouseDown move element and update the options
    generalState.idx &&
      !generalState.edit &&
      dispatch({
        type: 'SET_NEW_VALUES',
        payload: {
          loadName: 'left',
          loadValue: cursorLeft,
          id: generalState.idx,
        },
      });
    generalState.idx &&
      !generalState.edit &&
      dispatch({
        type: 'SET_NEW_VALUES',
        payload: {
          loadName: 'top',
          loadValue: cursorTop,
          id: generalState.idx,
        },
      });
    generalState.idx && updateElement(generalState.idx, false);
  };

  return (
    <CONTAINER>
      <MenuTopRight />

      <WRAPPER
        onClick={(e) => generalState.global && createNewElement(e)}
        onMouseMove={(e) => (generalState.element || generalState.idx) && setCursorCordinates(e)}
        onMouseUp={() =>
          props.change_one([
            {
              loadName: 'idx',
              loadValue: null,
            },
          ])
        }
        grabbing={!generalState.edit}
        id='photo'
        style={{
          display: !auth.isAuthenticated && 'none',
          backgroundImage: `url(${image.background})`,
        }}
      >
        {/* Hello gif */}
        {!generalState.openApp && (
          <div className='hello_box'>
            <img src={hello} alt='hello' className='hello_gif' />
          </div>
        )}

        {/* Unfollow element. Id === null */}
        {generalState.id && (
          <button
            className='btn stop-following'
            onClick={() =>
              props.change_one([
                {
                  loadName: 'id',
                  loadValue: null,
                },
              ])
            }
          >
            {getTranslatedText('Stop_following')}
          </button>
        )}

        {/* Picture instead of a cursor */}
        {generalState.openApp && (
          <CURSOR
            src={generalState.element}
            left={cursorLeft}
            top={cursorTop}
            display={generalState.element}
          />
        )}

        {/* Info about moving elements */}
        {!generalState.global &&
          generalState.list.length > 0 &&
          !generalState.edit &&
          generalState.infomove && (
            <div className='info-move'>
              {getTranslatedText('You_can_move_elements_now')}
              <button
                className='btn'
                onClick={() =>
                  props.change_one([
                    {
                      loadName: 'infomove',
                      loadValue: false,
                    },
                  ])
                }
              >
                {getTranslatedText('Close')}
              </button>
            </div>
          )}

        {/* Info about not moving elemnts */}
        {!generalState.global &&
          generalState.list.length > 0 &&
          generalState.edit &&
          generalState.infonotmove && (
            <div className='info-move'>
              {getTranslatedText('You_cant_move_elements_in_edit_mode')}
              <button
                className='btn'
                onClick={() =>
                  props.change_one([
                    {
                      loadName: 'infonotmove',
                      loadValue: false,
                    },
                  ])
                }
              >
                {getTranslatedText('Close')}
              </button>
            </div>
          )}

        {generalState.list &&
          generalState.list.map(x => {
            return (
              <IMG
                className='IamNewElement'
                key={x.id}
                alt='img1'
                draggable={false}
                id={x.id}
                src={x.element}

                //style
                style={{
                  pointerEvents: generalState.global ||
                    (generalState.idx && !generalState.edit)
                      ? 'none'
                      : 'auto',
                  borderBottom: generalState.id === x.id ? '3px solid #d65555' : '',
                  clipPath: x.clippath,
                }}
                
                //passed props
                top={(x.top - x.height / 2) / 23.9}
                left={(x.left - x.width / 2) / 23.9}
                height={x.height / 23.9}
                width={x.width / 23.9}
                transform={`rotate(${x.rotate}deg)`}
                backgroundColor={x.bgCol}
                opacity={x.opacity}
                filter={x.filter[0].final}
                borderRadius={x.borderRadius}
                zIndex={x.zIndex}

                // events
                onClick={e =>
                  generalState.edit
                    ? (updateElement(x.id, false),
                      props.change_one([
                        {
                          loadName: 'idx',
                          loadValue: null,
                        },
                      ]))
                    : null
                }
                onMouseDown={e =>
                  generalState.edit
                    ? null
                    : props.change_one([
                        {
                          loadName: 'idx',
                          loadValue: x.id,
                        },
                      ])
                }
                onMouseUp={() =>
                  props.change_one([
                    {
                      loadName: 'idx',
                      loadValue: null,
                    },
                  ])
                }

                //animations :
                //width
                widthPlay={x.widthA[0].play}
                widthDur={x.widthA[0].play && x.widthA[0].time}
                widthTimFun={x.widthA[0].play && x.widthA[0].timing_func_final}
                animWidth={x.width}
                // height
                heightPlay={x.heightA[0].play}
                heightDur={x.heightA[0].play && x.heightA[0].time}
                heightTimFun={
                  x.heightA[0].play && x.heightA[0].timing_func_final
                }
                animHeight={x.height}
                // rotate
                rotateVal={x.rotate}
              />
            );
          })}
      </WRAPPER>
    </CONTAINER>
  );
}

export default connect(null, { change_one })(PlayGround);

const widthS = (w: number, r: number) => keyframes`
  0% {
    width: ${w}px;
    transform: translate(0px, 0px) rotate(${r}deg);
  } 50% {
    width: ${w / 2}px;
    transform: translate(${w / 4}px, 0px) rotate(${r}deg);
  } 100% {
    width: ${w}px;
    transform: translate(0px, 0px) rotate(${r}deg);
  }
`;

const heightS = (h: number, r: number) => keyframes`
  0% {
    height: ${h}px;
    transform: translate(0px, 0px) rotate(${r}deg);
  } 50% {
    height: ${h / 2}px;
    transform: translate(0px, ${h / 4}px) rotate(${r}deg);
  } 100% {
    height: ${h}px;
    transform: translate(0px, 0px) rotate(${r}deg);
  }
`;

const IMG = styled.img<{top: number, left: number, transform: string, backgroundColor: string, opacity: number, filter: string, borderRadius: number, zIndex: number, widthPlay: any, widthDur: any, widthTimFun: any, animWidth: any, heightPlay: any, heightDur: any, heightTimFun: any, animHeight: any, rotateVal: number  }>`
  position: absolute;
  top: ${({top}) => top && `${top}rem`};
  left: ${({left}) => left && `${left}rem`};
  height: ${({height}) => height && `${height}rem`};
  width: ${({width}) => width && `${width}rem`};
  opacity: ${({opacity}) => opacity && opacity};
  filter: ${({filter}) => filter && filter};
  borderRadius: ${({borderRadius}) => borderRadius && borderRadius + 'px'};
  zIndex: ${({zIndex}) => zIndex && zIndex};
  backgroundColor: ${({backgroundColor}) => backgroundColor && backgroundColor};
  transform: ${({transform}) => transform && transform};

  animation: ${({ widthPlay, animWidth, rotateVal }) =>
        widthPlay ? widthS(animWidth, rotateVal) : ''}
      ${({ widthDur }) => (widthDur ? `${widthDur}s` : '1s')}
      ${({ widthTimFun }) => (widthTimFun ? `${widthTimFun}` : 'linear')}
      infinite,
    ${({ heightPlay, animHeight, rotateVal }) =>
        heightPlay ? heightS(animHeight, rotateVal) : ''}
      ${({ heightDur }) => (heightDur ? `${heightDur}s` : '1s')}
      ${({ heightTimFun }) => (heightTimFun ? `${heightTimFun}` : 'linear')}
      infinite;
`;
