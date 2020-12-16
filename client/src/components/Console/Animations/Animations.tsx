import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Styles
import { CONTAINER, WRAPPER_1, WRAPPER_2, WRAPPER_3 } from './styles.js';
// Translations
import { getTranslatedText } from '../../../store/languages/Translations_function';
// Interfaces
import { IAnimations, IAnimationsState } from '../../../types/animationsInterfaces';


const Animations: React.FC<IAnimations> = ({name}) => {
  const generalState = useSelector((state: IAnimationsState) => state.general_state);
  const dispatch = useDispatch();

  let w: any = generalState.id
    ? generalState.list.filter(x => x.id === generalState.id)
    : null;

  return (
    <CONTAINER>
      <WRAPPER_1>
        <p>{getTranslatedText(name)}</p>
        <input
          disabled={!generalState.edit || !generalState.id}
          type='checkbox'
          onChange={e => {
            dispatch({
              type: 'SET_NEW_VALUES',
              payload: {
                loadName: name,
                loadSubName: 'play',
                loadValue: w[0][name][0].play,
                id: generalState.id,
                loadType: 'checkbox',
              },
            });
          }}
          checked={w ? w[0][name][0].play : ''}
        />
      </WRAPPER_1>
      <WRAPPER_2>
        {w && w[0][name][0].play ? (
          <input
            type='text'
            onChange={e => {
              dispatch({
                type: 'SET_NEW_VALUES',
                payload: {
                  loadName: name,
                  loadSubName: 'time',
                  loadValue: e.target.value,
                  id: generalState.id,
                },
              });
            }}
            value={w && w[0][name][0].time}
          />
        ) : (
          <div className='emptius'></div>
        )}

        {w && w[0][name][0].play ? (
          <select
            onChange={e => {
              dispatch({
                type: 'SET_NEW_VALUES',
                payload: {
                  loadName: name,
                  loadSubName: 'timing_func_name',
                  loadValue: e.target.value,
                  id: generalState.id,
                },
              });
            }}
            value={w && w[0][name][0].timing_func_name}
          >
            {generalState.animTimFunc.map(a => {
              return <option value={a.value} key={a.name}>{a.name}</option>;
            })}
          </select>
        ) : (
          <div className='emptius'></div>
        )}
      </WRAPPER_2>
      <WRAPPER_3>
        {w &&
        w[0][name][0].timing_func_name === 'cubic-bezier' &&
        w[0][name][0].play ? (
          [
            'timing_func_value_1',
            'timing_func_value_2',
            'timing_func_value_3',
            'timing_func_value_4',
          ].map(t => {
            return (
              <div className='cubic-info' key={t}>
                <input
                  type='range'
                  onChange={e => {
                    dispatch({
                      type: 'SET_NEW_VALUES',
                      payload: {
                        loadName: name,
                        loadSubName: t,
                        loadValue: e.target.value,
                        id: generalState.id,
                      },
                    });
                  }}
                  step='.01'
                  min={
                    t === 'timing_func_value_1' || t === 'timing_func_value_3'
                      ? '0'
                      : '-2'
                  }
                  max={
                    t === 'timing_func_value_1' || t === 'timing_func_value_3'
                      ? '1'
                      : '2'
                  }
                  value={w && w[0][name][0][t]}
                />
                <span>{w && w[0][name][0][t]}</span>
              </div>
            );
          })
        ) : (
          <div className='emptius2'></div>
        )}
      </WRAPPER_3>
    </CONTAINER>
  );
}

export default Animations;
