import React, { useState, useEffect } from 'react';
// Styles
import { REGISTER_CONTAINER, LOGIN_CONTAINER, CLIP } from './styles';
// Components
import Register from '../../User/Register';
import Login from '../../User/Login';
// Redux
import { useSelector } from 'react-redux';
// Interfaces
import { IMenuMainState } from '../../../types/menuMainInterfaces';

const MenuMain: React.FC = () => {
  const auth = useSelector((state: IMenuMainState) => state.auth);

  const [disappear, setDisappear] = useState(false);

  useEffect(() => {
    if (disappear) {
      setTimeout(() => {
        setDisappear(false);
      }, 1400);
    } else {
      setDisappear(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isAuthenticated]);

  return (
    <>
      <REGISTER_CONTAINER move={auth.isAuthenticated} disappear={disappear}>
        <CLIP move={auth.isAuthenticated}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </CLIP>

        <Register />
      </REGISTER_CONTAINER>

      <LOGIN_CONTAINER move={auth.isAuthenticated} disappear={disappear}>
        <Login />
      </LOGIN_CONTAINER>
    </>
  );
};

export default MenuMain;
