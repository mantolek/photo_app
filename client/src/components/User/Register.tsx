import React, { useState } from 'react';
import styled from 'styled-components';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { getTranslatedText } from '../../store/languages/Translations_function';

interface IRegister {
  register: Function;
}

interface IRegisterState {
  error: {
    msg_login: string;
    msg_register: string;
  }
}

const Register: React.FC<IRegister> = props => {
  const error = useSelector((state: IRegisterState) => state.error);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const { name, password } = formData;

  const change = (e: any) => {
    if (error.msg_register || error.msg_login ) {
      dispatch({ type: 'CLEAR_ERRORS_REGISTER' });
      dispatch({ type: 'CLEAR_ERRORS_LOGIN' });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value.trimLeft() });
};

const submitForm = (e: any) => {
    e.preventDefault();
    
    props.register({ name, password });
    setFormData({name: '', password: ''})
    
    if (error.msg_register || error.msg_login ) {
      dispatch({ type: 'CLEAR_ERRORS_REGISTER' });
      dispatch({ type: 'CLEAR_ERRORS_LOGIN' });
    }
  };

  return (
      <FORM>
        <p>{getTranslatedText('Register')}</p>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => change(e)}
        />
        <input
          type='text'
          name='password'
          value={password}
          onChange={(e) => change(e)}
        />
        <button onClick={(e) => submitForm(e)}>{getTranslatedText('Submit')}</button>
        {error.msg_register ? <p>{error.msg_register}</p> : <p></p>}
      </FORM>
  );
}

export default connect(null, { register })(Register);

const FORM = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p { 
        color: ${({ theme }) => theme.colorBright};;
        height: 1.25rem;
    }

    input, button {
        margin-top: .15rem;
        border-radius: .2rem;
        outline: none;
        border: none;
    }

    input {
        padding-left: .5rem;
        line-height: 1rem;
    }

    button {
        background-color: ${({ theme }) => theme.colorBgBtn2};
        color: ${({ theme }) => theme.colorBtn2};
        cursor: pointer;
        padding: .2rem .4rem;
    }
`