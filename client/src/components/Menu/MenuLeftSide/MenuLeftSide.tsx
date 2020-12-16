import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Styles
import { BUTTON } from './styles';
// Redux
import { change_one } from '../../../actions/change_one';
import { connect } from 'react-redux';
// Interfaces
import { IMenuLeftSide, IMenuLeftSideState } from '../../../types/menuLeftSideInterfaces';

const MenuLeftSide: React.FC<IMenuLeftSide> = ({name, change_one}) => {
  const generalState = useSelector((state: IMenuLeftSideState) => state.general_state);

  return (
    <BUTTON
      className='btn2'
      disabled={name !== 'elements' && generalState.global}
      onClick={() => {
        return (
          change_one([
            {
              loadName: 'page',
              loadValue: name,
            },
          ]),
          name === 'elements' &&
            change_one([
              {
                loadName: 'edit',
                loadValue: true, // will make it false
              },
            ])
        );
      }}
      title={
        name === 'elements'
          ? name.toUpperCase()
          : name === 'general'
          ? generalState.global
            ? 'Stop "Add Mode" to access'
            : 'General options'
          : name === 'animation'
          ? generalState.global
            ? 'Stop "Add Mode" to access'
            : 'Animations'
          : name === 'photo'
          ? generalState.global
            ? 'Stop "Add Mode" to access'
            : 'Photos'
          : name.toUpperCase()
      }
    >
      <i className='fas fa-carrot'></i>
    </BUTTON>
  );
}

export default React.memo(connect(null, { change_one })(MenuLeftSide));
