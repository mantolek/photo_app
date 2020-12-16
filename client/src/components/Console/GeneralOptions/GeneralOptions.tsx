import React from 'react';
// Styling
import { LABEL } from './styles';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Interfaces
import { IGeneralOptions, IGeneralOptionsState } from '../../../types/generalOptionsInterfaces';


const GeneralOptions: React.FC<IGeneralOptions> = ({name, max, min}) => {
  const generalState = useSelector((state: IGeneralOptionsState) => state.general_state);
  const dispatch = useDispatch();

  let w: any = generalState.id
    ? generalState.list.filter((x) => x.id === generalState.id)
    : null;

  return (
    <>
      {name === 'filter' ? (
        <LABEL
          style={{ display: generalState.openApp ? 'flex' : 'none' }}
          dec={!generalState.edit || !generalState.id}
        >
          <p>{name}</p>
          <select
            disabled={!generalState.edit || !generalState.id}
            value={w ? w[0].filter[0].name : ''}
            onChange={(e) =>
              dispatch({
                type: 'SET_NEW_VALUES',
                payload: {
                  loadName: name,
                  loadValue: e.target.value.toLowerCase(),
                  id: generalState.id,
                  loadFilterName: true,
                },
              })
            }
          >
            <option value=''>---</option>
            {generalState.filters.map((f) => {
              return <option value={f} key={f}>{f}</option>;
            })}
          </select>

          {w && w[0][name][0].name && (
            <input
              disabled={!generalState.edit || !generalState.id}
              className='range-input'
              value={w && w[0][name][0].value}
              step={
                ((w && w[0][name][0].name === 'brightness') ||
                  (w && w[0][name][0].name === 'blur')) &&
                '.01'
              }
              type='range'
              onChange={(e) =>
                dispatch({
                  type: 'SET_NEW_VALUES',
                  payload: {
                    loadName: name,
                    loadValue: e.target.value,
                    id: generalState.id,
                    loadFilters: true,
                  },
                })
              }
              min={'0'}
              max={
                w && w[0][name][0].name === 'blur'
                  ? '20'
                  : w && w[0][name][0].name === 'brightness'
                  ? '3'
                  : w && w[0][name][0].name === 'contarts'
                  ? '500'
                  : w && w[0][name][0].name === 'grayscale'
                  ? '100'
                  : w && w[0][name][0].name === 'hue-rotate'
                  ? '360'
                  : w && w[0][name][0].name === 'invert'
                  ? '100'
                  : w && w[0][name][0].name === 'saturate'
                  ? '100'
                  : w && w[0][name][0].name === 'sepia'
                  ? '100'
                  : '100'
              }
            />
          )}
        </LABEL>
      ) : name === 'clippath' ? (
        <LABEL
          style={{ display: generalState.openApp ? 'flex' : 'none' }}
          dec={!generalState.edit || !generalState.id}
        >
          <p>{name}</p>
          <select
            disabled={!generalState.edit || !generalState.id}
            value={w ? w[0].clippath : ''}
            onChange={(e) =>
              dispatch({
                type: 'SET_NEW_VALUES',
                payload: {
                  loadName: name,
                  loadValue: e.target.value,
                  id: generalState.id,
                },
              })
            }
            style={{ margin: '0rem .3rem' }}
          >
            <option value=''>---</option>
            {generalState.clippaths.map((f) => {
              return <option value={f.value} key={f.name}>{f.name}</option>;
            })}
          </select>
        </LABEL>
      ) : name === 'zIndex' ? (
        <LABEL
          style={{ display: generalState.openApp ? 'flex' : 'none' }}
          dec={!generalState.edit || !generalState.id}
        >
          <p>{name}:</p>
          <input
            disabled={!generalState.edit || !generalState.id}
            value={w && w.length > 0 ? w[0][name] : ''}
            type='number'
            onChange={(e) =>
              dispatch({
                type: 'SET_NEW_VALUES',
                payload: {
                  loadName: name,
                  loadValue: e.target.value,
                  id: generalState.id,
                },
              })
            }
          />
        </LABEL>
      ) : (
        // OTHER OPTIONS
        <LABEL
          style={{ display: generalState.openApp ? 'flex' : 'none' }}
          dec={!generalState.edit || !generalState.id}
        >
          <p>{name}:</p>
          <input
            disabled={!generalState.edit || !generalState.id}
            className='range-input'
            value={w && w.length > 0 ? w[0][name] : ''}
            step={name === 'opacity' ? '.01' : '1'}
            type='range'
            onChange={(e) =>
              dispatch({
                type: 'SET_NEW_VALUES',
                payload: {
                  loadName: name,
                  loadValue: e.target.value,
                  id: generalState.id,
                },
              })
            }
            min={min && min}
            max={max && max}
          />
        </LABEL>
      )}
    </>
  );
}

export default GeneralOptions;
