import React from 'react';
import styled from 'styled-components';

interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({children}) => {
  return <CONTAINER className='mega_container'>{children}</CONTAINER>;
}

export default Container;

const CONTAINER = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  .parent-photo-class {
    .cont-btns {
      button, a {
        background-color: ${({ theme }) => theme.colorBgBtn2};
        color: ${({ theme }) => theme.colorBtn2};
      }
    }
  }

  .popup-bg {
      .popup-container {
          button {
            background-color: ${({ theme }) => theme.colorBgBtn2};
            color: ${({ theme }) => theme.colorBtn2};
          }
      }
  }
`;
