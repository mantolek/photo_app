import styled from 'styled-components';

export const BUTTON = styled.button`
  width: 100%;
  padding: 0.73rem 0;
  cursor: pointer;
  transition: 0.3s all;
  background-color: ${({ theme }) => theme.colorBgBtn};

  &:hover {
    background-color: ${({ theme }) => theme.colorBright};
  }

  i {
    color: #fff;
    pointer-events: none;
  }

  &:disabled {
    background-color: gray;
    opacity: 0.4;
  }
`;
