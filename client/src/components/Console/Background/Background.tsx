import React from 'react';
// Redux
import { useDispatch } from 'react-redux';
// Components
import { IMG } from './styles.js';
// Interfaces
import { IBackground } from '../../../types/backgroundInterfaces';

const Background: React.FC<IBackground> = (props) => {
  const dispatch = useDispatch();

  return (
    <IMG
      src={props.src}
      alt={props.alt}
      onClick={() => {
        dispatch({
          type: 'IMAGE_CHANGE_ONE',
          payload: {
            loadName: 'background',
            loadValue: props.src,
          }
        });
      }}
    />
  );
}

export default Background;
