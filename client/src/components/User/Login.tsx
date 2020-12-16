import React, { useState } from 'react';
import styled from 'styled-components';
import { login, logout } from '../../actions/auth';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import { getTranslatedText } from '../../store/languages/Translations_function';

interface ILogin {
  login: Function;
  logout: Function;
}

interface ILoginState {
  error: {
    msg_login: string;
    msg_register: string;
  }
}

const Login: React.FC<ILogin> = props => {
  const error = useSelector((state: ILoginState) => state.error);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const { name, password } = formData;

  const change = (e: any) => {
    if (error.msg_login || error.msg_register) {
      dispatch({ type: 'CLEAR_ERRORS_LOGIN' });
      dispatch({ type: 'CLEAR_ERRORS_REGISTER' });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value.trimLeft() });
  };

  const submitForm = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    props.login({ name, password });
    setFormData({ name: '', password: '' });
    
    if (error.msg_login || error.msg_register) {
      dispatch({ type: 'CLEAR_ERRORS_LOGIN' });
      dispatch({ type: 'CLEAR_ERRORS_REGISTER' });
    }
  };

  return (
    <FORM>
      <p>{getTranslatedText('Login')}</p>
      <input type='text' name='name' value={name} onChange={(e) => change(e)} />
      <input
        type='text'
        name='password'
        value={password}
        onChange={(e) => change(e)}
      />
      <button onClick={(e: React.MouseEvent<HTMLInputElement>) => submitForm(e)}>{getTranslatedText('Submit')}</button>
      {error.msg_login ? <p>{error.msg_login}</p> : <p></p>}
    </FORM>
  );
}

export default connect(null, { login, logout })(Login);

const FORM = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colorDark};
    height: 1.25rem;
    max-width: 11rem;
    text-align: center;
  }

  input,
  button {
    margin-top: 0.15rem;
    border-radius: 0.2rem;
    outline: none;
    border: none;
  }

  input {
    padding-left: 0.5rem;
    line-height: 1rem;
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.colorBgBtn};
    color: ${({ theme }) => theme.colorBtn};
    cursor: pointer;
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
  }
`;
